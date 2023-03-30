import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'solicitacao',
        loadChildren: () => import('../solicitacao/solicitacao.module').then( m => m.SolicitacaoPageModule)
      },
      {
        path: 'notificacao',
        loadChildren: () => import('../notificacao/notificacao.module').then( m => m.NotificacaoPageModule)
      },
      {
        path: '',
        redirectTo: '/home/solicitacao',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomePageRoutingModule {}
