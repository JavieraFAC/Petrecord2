import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarperfilPageRoutingModule } from './modificarperfil-routing.module';

import { ModificarperfilPage } from './modificarperfil.page';
import { ComponentsModule } from 'src/app/componentes/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarperfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModificarperfilPage]
})
export class ModificarperfilPageModule {}
