import { Component ,inject} from '@angular/core';
import { AlertController,Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';
import { CargandoService } from 'src/services/cargando/cargando.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private platform: Platform,
  ) {}

  firebaseS = inject(FirebaseService);
  cargandoS = inject(CargandoService);
 
 
    // --------------------------------------------------------------
  // Alerta de ayuda
  async showHelpAlert() {
    const alert = await this.alertController.create({
      header: 'Centro de Ayuda',
      message: 'Para consultas, contáctanos por correo o WhatsApp.',
      buttons: [
        {
          text: 'Enviar Correo',
          handler: () => {
            window.open('mailto:ja.alvarezc@duocuc.cl');
          }
        },
        {
          text: 'WhatsApp',
          handler: () => {
            window.open('https://wa.me/56984048112');
          }
        },
        {
          text: 'Salir',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  // Alerta de cierre de sesión
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Saldrás de tu perfil',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Alerta cancelada');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.firebaseS.signOut();
          }
        }
      ]
    });

    await alert.present();
  }
}
