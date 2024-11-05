import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-newtutor',
  templateUrl: './newtutor.component.html',
  styleUrls: ['./newtutor.component.scss'],
})
export class NewtutorComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(3)]),
    direccion: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required, Validators.min(8)]),
    email: new FormControl(''),
  })

 firebaseS = inject(FirebaseService);
 cargandoS = inject(CargandoService);

 user = {} as Usuario;

  ngOnInit() {

    this.user = this.cargandoS.getFromLocalStorage('user');
  }



  async submit() {
    if (this.form.valid) {
      const path = `users/${this.user.uid}/tutores`;
  
      const loading = await this.cargandoS.loading();
      await loading.present();
  
      delete this.form.value.id; // Elimina la propiedad id si no es necesaria
  
      try {
        const res = await this.firebaseS.agregarTutor(path, this.form.value);
        await loading.dismiss();
        
        // Cierra el modal y devuelve los datos del nuevo tutor
        this.cargandoS.dismissmodal({ success: true, tutor: this.form.value });
        
        this.cargandoS.presentToast({
          message: 'Nuevo tutor agregado',
          duration: 1500,
          color: 'success',
          position: 'middle',
        });
        
      } catch (error) {
        await loading.dismiss(); // Asegúrate de que el loading se cierre
        console.error(error);
        this.cargandoS.presentToast({
          message: 'Error al agregar el tutor',
          duration: 1500,
          color: 'danger',
          position: 'middle',
        });
      }
    }
  }
}