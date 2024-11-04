import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { CargandoService } from 'src/services/cargando/cargando.service';
import { FirebaseService } from 'src/services/firebase.service';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})

export class ModificarperfilPage  {

  form = new FormGroup({
    imagenPerfil: new FormControl('',[Validators.required]),
  })


firebaseS = inject(FirebaseService);
cargandoS = inject(CargandoService);

  tipoCuenta: string = ''; // tipo de cuenta
  VatiendeClinica: boolean = false; // Almacena si atiende en consulta
  Vclinicas: string[] = []; // Almacena las clínicas
  VatiendeParticular: boolean = false;


  ngOnInit() {
  }

  async tomarImagen(){
   const dataUrl = (await this.cargandoS.tomarFoto('Foto de perfil')).dataUrl;
    this.form.controls.imagenPerfil.setValue(dataUrl);
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


}


