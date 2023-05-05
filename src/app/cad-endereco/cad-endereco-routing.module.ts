import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadEnderecoPage } from './cad-endereco.page';

const routes: Routes = [
  {
    path: '',
    component: CadEnderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadEnderecoPageRoutingModule {}
