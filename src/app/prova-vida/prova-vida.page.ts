import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-prova-vida',
  templateUrl: './prova-vida.page.html',
  styleUrls: ['./prova-vida.page.scss'],
})
export class ProvaVidaPage implements OnInit {

  constructor(
    private router: Router,
    public cameraService: CameraService,
    public actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    await this.cameraService.capturarFoto();
  }
}
