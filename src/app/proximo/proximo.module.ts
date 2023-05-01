import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximoPageRoutingModule } from './proximo-routing.module';

import { ProximoPage } from './proximo.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ProximoPageRoutingModule
  ],
  declarations: [ProximoPage]
})
export class ProximoPageModule {}
