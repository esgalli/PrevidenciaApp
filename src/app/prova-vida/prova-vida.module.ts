import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvaVidaPageRoutingModule } from './prova-vida-routing.module';

import { ProvaVidaPage } from './prova-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvaVidaPageRoutingModule
  ],
  declarations: [ProvaVidaPage]
})
export class ProvaVidaPageModule {}
