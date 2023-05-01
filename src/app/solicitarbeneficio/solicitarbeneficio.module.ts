import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SolicitarbeneficioPageRoutingModule } from './solicitarbeneficio-routing.module';

import { SolicitarbeneficioPage } from './solicitarbeneficio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SolicitarbeneficioPageRoutingModule
  ],
  declarations: [SolicitarbeneficioPage]
})
export class SolicitarbeneficioPageModule {}
