import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarcuentaPageRoutingModule } from './configurarcuenta-routing.module';

import { ConfigurarcuentaPage } from './configurarcuenta.page';
import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarcuentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfigurarcuentaPage]
})
export class ConfigurarcuentaPageModule {}
