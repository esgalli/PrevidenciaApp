import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prova-vida',
  templateUrl: './prova-vida.page.html',
  styleUrls: ['./prova-vida.page.scss'],
})
export class ProvaVidaPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
  }

  baterFoto(){

  }
}
