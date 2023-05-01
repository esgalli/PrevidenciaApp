import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadEnderecoPageRoutingModule } from './cad-endereco-routing.module';

import { CadEnderecoPage } from './cad-endereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadEnderecoPageRoutingModule
  ],
  declarations: [CadEnderecoPage]
})
export class CadEnderecoPageModule {}
