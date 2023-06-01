import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'resumo',
        loadChildren: () => import('../resumo/resumo.module').then( m => m.ResumoPageModule)
      },
      {
        path: 'solicitacao',
        loadChildren: () => import('../solicitacao/solicitacao.module').then( m => m.SolicitacaoPageModule)
      },
      {
        path: 'notificacao',
        loadChildren: () => import('../notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
      },
      {
        path: 'laudos',
        loadChildren: () => import('../laudos/laudos.module').then( m => m.LaudosPageModule)
      },
      {
        path: 'gerar-protocolo',
        loadChildren: () => import('../gerar-protocolo/gerar-protocolo.module').then( m => m.GerarProtocoloPageModule)
      },
      {
        path: 'atualizar',
        loadChildren: () => import('../atualizar/atualizar.module').then( m => m.AtualizarPageModule)
      },
      {
        path: 'prova-vida',
        loadChildren: () => import('../prova-vida/prova-vida.module').then( m => m.ProvaVidaPageModule)
      },
      {
        path: 'agendar-pericia',
        loadChildren: () => import('../agendar-pericia/agendar-pericia.module').then( m => m.AgendarPericiaPageModule)
      },
      {
        path: 'revisar',
        loadChildren: () => import('../revisar/revisar.module').then( m => m.RevisarPageModule)
      },
      {
        path: 'solicitarbeneficio',
        loadChildren: () => import('../solicitarbeneficio/solicitarbeneficio.module').then( m => m.SolicitarbeneficioPageModule)
      },
      {
        path: '',
        redirectTo: '/home/resumo',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageRoutingModule {}
