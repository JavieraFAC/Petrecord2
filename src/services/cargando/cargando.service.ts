import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {

loadingControl = inject (LoadingController);
toastControl = inject(ToastController);
router = inject(Router);


loading(){
  return this.loadingControl.create({spinner:'circular'})
}

async presentToast(opts?: ToastOptions){
  const toast = await this.toastControl.create(opts);
  toast.present();
}



routerLink(url:string){
return this.router.navigateByUrl(url);
}

// todo lo qe se guarda en localstorage debe ser string
saveInLocalStorage(key:string, value:any){
  return localStorage.setItem(key, JSON.stringify(value))
}


getFromLocalStorage(key:string){
  return JSON.parse(localStorage.getItem(key))
}

}
