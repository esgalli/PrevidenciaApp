import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'gerar-protocolo',
    loadChildren: () => import('./gerar-protocolo/gerar-protocolo.module').then( m => m.GerarProtocoloPageModule)
  },
  {
    path: 'revisar',
    loadChildren: () => import('./revisar/revisar.module').then( m => m.RevisarPageModule)
  },
  {
    path: 'laudos',
    loadChildren: () => import('./laudos/laudos.module').then( m => m.LaudosPageModule)
  },
  {
    path: 'agendar-pericia',
    loadChildren: () => import('./agendar-pericia/agendar-pericia.module').then( m => m.AgendarPericiaPageModule)
  },
  {
    path: 'prova-vida',
    loadChildren: () => import('./prova-vida/prova-vida.module').then( m => m.ProvaVidaPageModule)
  }
  //,
  //{
  //  path: 'resumo',
  //  loadChildren: () => import('./resumo/resumo.module').then( m => m.ResumoPageModule)
 // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
