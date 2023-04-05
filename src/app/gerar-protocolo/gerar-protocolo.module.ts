import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarProtocoloPageRoutingModule } from './gerar-protocolo-routing.module';

import { GerarProtocoloPage } from './gerar-protocolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarProtocoloPageRoutingModule
  ],
  declarations: [GerarProtocoloPage]
})
export class GerarProtocoloPageModule {}
