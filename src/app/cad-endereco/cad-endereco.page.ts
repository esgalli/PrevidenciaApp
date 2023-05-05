import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-endereco',
  templateUrl: './cad-endereco.page.html',
  styleUrls: ['./cad-endereco.page.scss'],
})
export class CadEnderecoPage implements OnInit {

  frmEndereco !: FormGroup;

  constructor
  ( private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.frmEndereco = this.formBuilder.group({
    });
  }
  avancar(){
    console.log('Enviei !!');
    this.router.navigate(['/home']);
  }
}
