import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CargandoService } from 'src/services/cargando/cargando.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  run: string = '';

  auth = inject(AngularFireAuth);
  firebaseS = inject(FirebaseService);
  cargandoS = inject(CargandoService);


  ngOnInit() {
    this.auth.currentUser.then(user => {
      if (user) {
        // Llamamos a la función para obtener los datos del usuario desde Firestore
        this.firebaseS.getUserData(user.uid).then(data => {
          if (data) {
            this.nombre = data['nombre'] || '';
            this.apellidos = data['apellidos'];
            this.run = data['run'] || '';

          }
        });
      }
    });
  }
}