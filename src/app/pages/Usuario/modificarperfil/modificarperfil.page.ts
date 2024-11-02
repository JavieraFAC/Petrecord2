import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage  {

  tipoCuenta: string = ''; // tipo de cuenta
  VatiendeClinica: boolean = false; // Almacena si atiende en consulta
  Vclinicas: string[] = []; // Almacena las clínicas
  VatiendeParticular: boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private popoverController: PopoverController,

  ) { }

  ngOnInit() {
  }

  // -----------------------------------------------------------------------------------------
  // --------------------------------------- CLINICAS  ---------------------------------------

  toggleClinica() {
    if (!this.VatiendeClinica) {
      this.Vclinicas = [];
    }
  }
  // Método para agregar una nueva clínica
  agregarClinica() {
    this.Vclinicas.push(''); 
  }
  // Método para eliminar una clínica específica
  eliminarClinica(index: number) {
    this.Vclinicas.splice(index, 1); 
  }

  // Método para mostrar toast
  private  async mostrarToast(mensaje: string, color: string = 'danger') {
      const toast = await this.toastController.create({
        message: mensaje,
        position: 'middle',
        duration: 3000,
        color: color
      });
      toast.present();
    }
  

}


