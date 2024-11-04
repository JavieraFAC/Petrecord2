import { Injectable, inject } from '@angular/core';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class CargandoService {

loadingControl = inject (LoadingController);
toastControl = inject(ToastController);
modalControl = inject(ModalController);
router = inject(Router);


async tomarFoto(promptLabelHeader: string){
  return await Camera.getPhoto({
    quality:90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt, //desde donde se toma la foto , galeria o camara
    promptLabelHeader,
    promptLabelPhoto: 'Selecciona una imagen',
    promptLabelPicture: 'Toma una foto',
  })

}
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


// modal
async presentModal(opts:ModalOptions ) {
  const modal = await this.modalControl.create(opts);

  await modal.present();

  const { data } = await modal.onWillDismiss();
  if(data) return data;
}

dismissmodal(data?:any){
return this.modalControl.dismiss(data);
}

}
