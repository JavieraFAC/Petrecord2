import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/services/firebase.service';
import { Usuario } from 'src/app/models/usuario.model';
import { CargandoService } from 'src/services/cargando/cargando.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    form = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  

 firebaseS = inject(FirebaseService);
 cargandoS = inject(CargandoService);


  ngOnInit() {}

  async submit (){
    if (this.form.valid){

      const loading = await this.cargandoS.loading();
      await loading.present();

      this.firebaseS.signIn(this.form.value as Usuario).then(res => {

        this.getUserInfo(res.user.uid);
      }).catch(error => {
        console.log(error);

        this.cargandoS.presentToast({
          message: "El usuario o la contraseña es inválido, porfavor vuelva a ingresar",
          duration: 2000,
          color: 'danger',
          position: 'middle',
        })


      }).finally(() => {
          loading.dismiss();
        })
    }
  }



  async getUserInfo(uid:string){
    if (this.form.valid){

      const loading = await this.cargandoS.loading();
      await loading.present();

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseS.getDocumento(path).then((user: Usuario) => {
        this.cargandoS.saveInLocalStorage('users',user)
        this.cargandoS.routerLink('/perfil');
        this.form.reset();

        this.cargandoS.presentToast({
          message: `Bienvenid@ ${user.nombre}`,
          duration: 2000,
          color: 'primary',
          position: 'middle',
        })

      }).catch(error => {
        console.log(error);

        this.cargandoS.presentToast({
          message: "El usuario o la contraseña es inválido, porfavor vuelva a ingresar",
          duration: 2000,
          color: 'danger',
          position: 'middle',
        })


      }) .finally(() => {
          loading.dismiss();
        })

}
  }
}
