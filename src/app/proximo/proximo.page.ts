import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-proximo',
  templateUrl: './proximo.page.html',
  styleUrls: ['./proximo.page.scss'],
})
export class ProximoPage implements OnInit {


  frmProximo!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

  ngOnInit() {
    this.frmProximo= this.formBuilder.group({

    });
  }
    avancar(){
      console.log('');
    }
  }
