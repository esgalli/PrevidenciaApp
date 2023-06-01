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
    redirectTo: '/initial',
    pathMatch: 'full'
  },
  {
    path: 'gerar-protocolo',
    loadChildren: () => import('./gerar-protocolo/gerar-protocolo.module').then( m => m.GerarProtocoloPageModule)
  }
  {
    path: 'solicitarbeneficio',
    loadChildren: () => import('./solicitarbeneficio/solicitarbeneficio.module').then( m => m.SolicitarbeneficioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'atualizar',
    loadChildren: () => import('./atualizar/atualizar.module').then( m => m.AtualizarPageModule)
  },
  {
    path: 'initial',
    loadChildren: () => import('./initial/initial.module').then( m => m.InitialPageModule)
  },
  {
    path: 'prova-vida',
    loadChildren: () => import('./prova-vida/prova-vida.module').then( m => m.ProvaVidaPageModule)
  }
  {
    path: 'cad-endereco',
    loadChildren: () => import('./cad-endereco/cad-endereco.module').then( m => m.CadEnderecoPageModule)
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
