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
  cargarTutores(){
          let path = `users/${this.user().uid}/tutores`;

         let sub= this.firebaseS.mostrarTutores(path).subscribe({
            next: (res:any) =>{
              this.tutores =res;
              sub.unsubscribe();
            }
          })

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
            this.cargarTutores(); // Recargar la lista de tutores si se agregó un nuevo tutor
          }
        });
      }

    async editarTutor(){

    }
}
