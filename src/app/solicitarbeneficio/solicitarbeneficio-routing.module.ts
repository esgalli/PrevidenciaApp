import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarbeneficioPage } from './solicitarbeneficio.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarbeneficioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarbeneficioPageRoutingModule {}
