import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarcuentaPage } from './configurarcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarcuentaPageRoutingModule {}
