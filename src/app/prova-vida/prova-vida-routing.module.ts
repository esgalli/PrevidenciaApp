import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvaVidaPage } from './prova-vida.page';

const routes: Routes = [
  {
    path: '',
    component: ProvaVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvaVidaPageRoutingModule {}
