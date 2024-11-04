import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NofoundComponent } from './componentes/nofound/nofound.component';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[noAuthGuard]
  },
  {
    path: 'nuevacuenta',
    loadChildren: () => import('./pages/nuevacuenta/nuevacuenta.module').then( m => m.NuevacuentaPageModule),
    canActivate:[noAuthGuard]
  },
  {
    path: 'olvidocontrasena',
    loadChildren: () => import('./pages/olvidocontrasena/olvidocontrasena.module').then( m => m.OlvidocontrasenaPageModule),
    canActivate:[noAuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/Usuario/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'tutores',
    loadChildren: () => import('./pages/Usuario/tutores/tutores.module').then( m => m.TutoresPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'configurarcuenta',
    loadChildren: () => import('./pages/Usuario/configurarcuenta/configurarcuenta.module').then( m => m.ConfigurarcuentaPageModule),
    canActivate:[authGuard]
  },
  {
    path: 'modificarperfil',
    loadChildren: () => import('./pages/Usuario/modificarperfil/modificarperfil.module').then( m => m.ModificarperfilPageModule),
    canActivate:[authGuard]

  },
  {
    path: 'api',
    loadChildren: () => import('./pages/Usuario/api/api.module').then( m => m.ApiPageModule),
    canActivate:[authGuard]
  },
  {
    path:'**', 
    component: NofoundComponent,
    canActivate:[authGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
