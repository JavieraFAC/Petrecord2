import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string = '';
  apellidos: string = '';
  run: string = '';


  constructor(private firebaseService: FirebaseService, private auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.currentUser.then(user => {
      if (user) {
        // Llamamos a la función para obtener los datos del usuario desde Firestore
        this.firebaseService.getUserData(user.uid).then(data => {
          if (data) {
            this.nombre = data['nombre'] || '';
            this.run = data['run'] || '';
            this.apellidos = data['apellidos'];
          }
        });
      }
    });
  }
}