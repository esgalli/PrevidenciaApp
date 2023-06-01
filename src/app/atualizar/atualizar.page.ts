import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, CameraService } from '../services/camera.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.page.html',
  styleUrls: ['./atualizar.page.scss'],
})
export class AtualizarPage implements OnInit {

  constructor(public cameraService: CameraService, public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    await this.cameraService.loadSaved();
  }
}
