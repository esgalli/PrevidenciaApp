import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisarPage } from './revisar.page';

const routes: Routes = [
  {
    path: '',
    component: RevisarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisarPageRoutingModule {}
