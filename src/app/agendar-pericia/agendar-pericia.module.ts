import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarPericiaPageRoutingModule } from './agendar-pericia-routing.module';

import { AgendarPericiaPage } from './agendar-pericia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarPericiaPageRoutingModule
  ],
  declarations: [AgendarPericiaPage]
})
export class AgendarPericiaPageModule {}
