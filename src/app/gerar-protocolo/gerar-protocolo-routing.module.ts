import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarProtocoloPage } from './gerar-protocolo.page';

const routes: Routes = [
  {
    path: '',
    component: GerarProtocoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarProtocoloPageRoutingModule {}
