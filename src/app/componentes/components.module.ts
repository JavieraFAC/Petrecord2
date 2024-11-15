import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { TerminosycondicionesComponent } from './terminosycondiciones/terminosycondiciones.component';
import { LogoComponent } from './logo/logo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NofoundComponent } from './nofound/nofound.component';
import { NewtutorComponent } from './newtutor/newtutor.component';





@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FormularioComponent,
    TerminosycondicionesComponent,
    NofoundComponent,
    NewtutorComponent
  ],
  exports:[
    HeaderComponent,
    LogoComponent,
    FormularioComponent,
    ReactiveFormsModule,
    TerminosycondicionesComponent,
    NofoundComponent,
    NewtutorComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
