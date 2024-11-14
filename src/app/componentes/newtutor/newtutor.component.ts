import { Component, inject, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { FirebaseService } from 'src/services/firebase.service';
import { Mascota, Tutor } from 'src/app/models/tutores.model';
import { Especie } from 'src/app/models/especies.model';

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
    telefono: new FormControl('',[Validators.required, Validators.minLength(8)]),
    email: new FormControl(''),
  })

 firebaseS = inject(FirebaseService);
 cargandoS = inject(CargandoService);

 user = {} as Usuario;
 @Input() tutor?: Tutor;
 mascotas: Mascota [] = [];

 ngOnInit() {
  this.user = this.cargandoS.getFromLocalStorage('user');

  if (this.tutor) {
    this.form.patchValue(this.tutor); // Cargar datos del tutor en el formulario
    this.mascotas = this.tutor.mascotas || [];
  }
}

// Método para agregar una nueva especie
async agregarEspecie() {

}


//--------------------------------------
async submit() {
  if (this.form.valid) {
    const path = `users/${this.user.uid}/tutores`; // Ruta del tutor en Firestore
    const tutorData = { ...this.form.value, mascotas: this.mascotas }; // Datos del tutor y mascotas

    const loading = await this.cargandoS.loading();
    await loading.present();

    try {
      if (this.tutor) {
        // Si existe un tutor, se actualiza en Firebase
        await this.firebaseS.editarTutor(path, tutorData.id, tutorData);
        this.cargandoS.dismissmodal({ success: true, tutor: tutorData });
        this.cargandoS.presentToast({
          message: 'Tutor actualizado exitosamente',
          duration: 1500,
          color: 'success',
          position: 'middle',
        });
      } else {
        // Si es un nuevo tutor, se agrega a Firebase
        delete tutorData.id; // Eliminar id si es un nuevo tutor
        await this.firebaseS.agregarTutor(path, tutorData);
        this.cargandoS.dismissmodal({ success: true, tutor: tutorData });
        this.cargandoS.presentToast({
          message: 'Nuevo tutor agregado',
          duration: 1500,
          color: 'success',
          position: 'middle',
        });
      }

      await loading.dismiss();
    } catch (error) {
      await loading.dismiss();
      console.error(error);
      this.cargandoS.presentToast({
        message: 'Error',
        duration: 1500,
        color: 'danger',
        position: 'middle',
      });
    }
  }
}


  agregarMascota() {
    const nuevaMascota: Mascota = {
      nombre: '', 
      especie: '', 
      fechaNacimiento: ''
    };
    this.mascotas.push(nuevaMascota); // Agregar mascota al array
  }

  eliminarMascota(index: number) {
    this.mascotas.splice(index, 1); // Eliminar mascota por índice
  }


}  