
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  frmCadastro!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.frmCadastro = this.formBuilder.group({

    });
  }
    cadastrar(){
      console.log('');
    }
  }

  export class ExampleComponent {
    constructor(private alertController: AlertController) {}
  
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Are you sure?',
        cssClass: 'custom-alert',
        buttons: [
          {
            text: 'No',
            cssClass: 'alert-button-cancel',
          },
          {
            text: 'Yes',
            cssClass: 'alert-button-confirm',
          },
        ],
      });
  
      await alert.present();
    }
  }