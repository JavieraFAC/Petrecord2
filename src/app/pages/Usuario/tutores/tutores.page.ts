import { Component, OnInit,inject } from '@angular/core';
import { NewtutorComponent } from 'src/app/componentes/newtutor/newtutor.component';
import { Tutor } from 'src/app/models/tutores.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.page.html',
  styleUrls: ['./tutores.page.scss'],
})
export class TutoresPage implements OnInit {

  firebaseS = inject(FirebaseService);
  cargandoS = inject(CargandoService);

  tutores : Tutor[] = [];

  constructor() { }

  ngOnInit() {}

 user(): Usuario{
return this.cargandoS.getFromLocalStorage('user');
 }

 ionViewWillEnter(){
  this.cargarTutores();
 }

// mostrar tutores
cargarTutores() {
  let path = `users/${this.user().uid}/tutores`;
  
  this.firebaseS.mostrarTutores(path).subscribe({
    next: (res: any) => {
      this.tutores = res; 
    },
    error: (err) => {
      console.error('Error al cargar tutores: ', err);
    }
  });
}


  // agregar tutor
  async agregartutor() {
    const modal = await this.cargandoS.presentModal({
      component: NewtutorComponent,
      cssClass: 'modaltutor',
    });

    // Espera a que se cierre el modal y verifica si se agregó un tutor
    modal.onDidDismiss().then((result) => {
      if (result.data?.success) {
        const newTutor = result.data.tutor; // Obtén los datos del nuevo tutor
        this.cargarTutores(); // O actualiza la lista de tutores
      }
    });
  }


  async editarTutor(tutor: Tutor) {
    const modal = await this.cargandoS.presentModal({
      component: NewtutorComponent,
      componentProps: { tutor }, // Pasa el tutor a editar
      cssClass: 'modaltutor',
    });
  
    modal.onDidDismiss().then((result) => {
      if (result.data?.success) {
        this.cargarTutores(); // Recargar la lista de tutores después de editar
      }
    });
  }
  
}
