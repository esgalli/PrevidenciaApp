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
        path: 'gerar-protocolo',
        loadChildren: () => import('../gerar-protocolo/gerar-protocolo.module').then( m => m.GerarProtocoloPageModule)
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
