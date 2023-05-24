import { Endereco } from './endereco';
import { ViaCEPService } from './../services/via-cep.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-endereco',
  templateUrl: './cad-endereco.page.html',
  styleUrls: ['./cad-endereco.page.scss'],
})
export class CadEnderecoPage implements OnInit {

  frmEndereco!: FormGroup;

  endereco!: Endereco;

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private viaCep: ViaCEPService
  ) {}

  ngOnInit() {
    this.createForm(new Endereco());
  }

  avancar(){
    console.log('Enviei !!');
    this.router.navigate(['/home']);
  }

  consultaCEP(){
    const cepValue = this.frmEndereco.controls['cep'].value;
    this.viaCep.getEndereco(cepValue).subscribe({ next: ((result) => { console.log(result) }),
    error:((error) => {
      console.log('Erorr occurred' + error)
    }),
    complete:(() => {
      console.log('Task completed')
    })
    })
    //this.populaEndereco(this.enderecos[1]);
    //console.log('las index - ' + this.enderecos[0].localidade);
  }

  createForm(endereco: Endereco){
    this.frmEndereco = this.formBuilder.group({
      cep: [endereco.cep],
      logradouro: [endereco.logradouro],
      numero: [endereco.numero],
      cidade: [endereco.localidade],
      bairro: [endereco.bairro]
    })
  }

  populaEndereco(endereco: Endereco){
    this.frmEndereco.controls['logradouro'].setValue(endereco.logradouro);
  }
}
