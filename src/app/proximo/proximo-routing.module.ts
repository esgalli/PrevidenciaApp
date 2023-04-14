import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximoPage } from './proximo.page';

const routes: Routes = [
  {
    path: '',
    component: ProximoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximoPageRoutingModule {}
