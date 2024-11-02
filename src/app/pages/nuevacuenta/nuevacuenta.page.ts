import { Component, inject,OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TerminosycondicionesComponent } from 'src/app/componentes/terminosycondiciones/terminosycondiciones.component';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { FirebaseService } from 'src/services/firebase.service';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { FormControl, FormGroup, Validators, FormBuilder, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nuevacuenta',
  templateUrl: './nuevacuenta.page.html',
  styleUrls: ['./nuevacuenta.page.scss'],
})
export class NuevacuentaPage implements OnInit{


  form = new FormGroup({
    uid: new FormControl(''),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('',[Validators.required, Validators.minLength(5)]),
    run: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confpassword: new FormControl('', [Validators.required]),
    aceptaTerminos: new FormControl(false, Validators.requiredTrue),
  }, { validators: this.passwordsMatch });

 firebaseS = inject(FirebaseService);
 cargandoS = inject(CargandoService);


  tipoCuenta: string = ''; // tipo de cuenta
  Vrun: string = '';

  // region
  regiones: string[] = [
    'Arica y Parinacota','Tarapacá','Antofagasta','Atacama','Coquimbo',
    'Valparaíso','Metropolitana de Santiago', 'O’Higgins','Maule', 'Ñuble',
    'Biobío', 'La Araucanía', 'Los Ríos','Los Lagos','Aysén', 'Magallanes y Antártica'
  ];



  constructor(
        private router: Router,
        private toastController: ToastController,
        private popoverController: PopoverController,

  ) { }
  ngOnInit() {}


  async submit() {

  // Valida el RUN 
  if (!this.validarRUN()) {
    return; 
  }
    if (this.form.valid) {
      const loading = await this.cargandoS.loading();
      await loading.present();

      this.firebaseS.signUp(this.form.value as Usuario).then(async res => {
        const uid = res.user.uid;
        this.form.controls.uid.setValue(uid);
        this.setUserInfo(uid);
      }).catch(error => {
        this.cargandoS.presentToast({
          message: 'Por favor, completa todos los datos',
          duration: 2000,
          color: 'danger',
          position: 'middle'
        });
      }).finally(() => loading.dismiss());
    }
  }


  async setUserInfo(uid:string){
    if (this.form.valid){

      const loading = await this.cargandoS.loading();
      await loading.present();

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseS.setDocument(path, this.form.value).then(async res => {
// mantener datos de forma local
        this.cargandoS.saveInLocalStorage('user',this.form.value);
        this.cargandoS.routerLink('/perfil');
        this.form.reset();

      }).catch(error => {
        this.cargandoS.presentToast({
          message: error.message,
          duration: 2000,
          color:'primary',
          position:'middle'
        })
      }).finally(()=> {
        loading.dismiss();
      })
    }
  }







  // --------------------------------------- RUT ---------------------------------------
  validarRUN(): boolean {
    const run = this.form.controls.run.value; // Obtén el valor directamente del FormGroup
  
    // Verifica si el RUN es nulo o vacío
    if (!run) {
      this.mostrarToast('RUN inválido: no puede estar vacío.', 'danger');
      return false;
    }
  
    const cleanedRun = run.replace(/\./g, '').replace('-', '').toUpperCase(); // Limpiar el formato
    const cuerpo = cleanedRun.slice(0, -1);  // Parte numérica
    const dvIngresado = cleanedRun.slice(-1); // Dígito verificador
  
    if (cuerpo.length < 7 || !/^\d+$/.test(cuerpo)) {
      this.mostrarToast('RUN inválido: debes escribirlo sin puntos, con guión y dígito verificador.', 'danger');
      return false;
    }
    const dvCalculado = this.calcularDigitoVerificador(cuerpo);
  
    if (dvIngresado !== dvCalculado) {
      this.mostrarToast(`RUN inválido`, 'danger');
      return false;
    }
  
    return true;
  }
  

// dígito verificador
calcularDigitoVerificador(cuerpo: string): string {
  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * multiplicador;
    multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
  }

  const resto = suma % 11;
  const dv = 11 - resto;

  if (dv === 11) return '0';
  if (dv === 10) return 'K';
  return dv.toString();
}



passwordsMatch(group: FormGroup) {
  return group.get('password').value === group.get('confpassword').value ? null : { mismatch: true };
}
  // ------------------------------------------------------------------------------------
  // ------------------------------------POPOVER-----------------------------------------
  async showTermsPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: TerminosycondicionesComponent,
      event,
      translucent: true,
      cssClass: 'full-screen-popover'
    });
    await popover.present();
  }
  // ------------------------------------------------------------------------------------
  // -----------------------------------MENSAJE------------------------------------------
  private  async mostrarToast(mensaje: string, color: string = 'danger') {
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'middle',
        duration: 3000,
        color: color
      });
      toast.present();
    }
  }

