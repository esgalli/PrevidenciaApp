import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitarbeneficio',
  templateUrl: './solicitarbeneficio.page.html',
  styleUrls: ['./solicitarbeneficio.page.scss'],
})
export class SolicitarbeneficioPage implements OnInit {

  frmSolicitar!: FormGroup;
  isAlertOpen!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.frmSolicitar = this.formBuilder.group({
  });
  }

  solicitarbeneficio(){
    console.log('');
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
