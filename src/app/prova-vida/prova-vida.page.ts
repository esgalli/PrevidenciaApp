import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-prova-vida',
  templateUrl: './prova-vida.page.html',
  styleUrls: ['./prova-vida.page.scss'],
})
export class ProvaVidaPage implements OnInit {

  imagem = string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  async baterFoto(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    })

    this.imagem = image.dataUrl;
  }

  ngOnInit() {
  }
}
