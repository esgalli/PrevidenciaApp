import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarPericiaPage } from './agendar-pericia.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarPericiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarPericiaPageRoutingModule {}
