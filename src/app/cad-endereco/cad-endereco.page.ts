import { UfServiceService } from './../services/uf-service.service';
import { Uf } from './../model/uf';
import { Endereco } from './endereco';
import { ViaCEPService } from './../services/via-cep.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { parse } from 'path';

@Component({
  selector: 'app-cad-endereco',
  templateUrl: './cad-endereco.page.html',
  styleUrls: ['./cad-endereco.page.scss'],
})
export class CadEnderecoPage implements OnInit {

  // esse é o ponto de ligação com o formulário html
  frmEndereco!: FormGroup;

  endereco!: Endereco;
  listaUFs: Uf[] = [];

// inicializa algumas propriedades que o componente necessita.
  constructor( private formBuilder: FormBuilder, // construção do formulário
               private router: Router,
               private viaCep: ViaCEPService,
               private ufService: UfServiceService
  ) {}

  ngOnInit() {
    this.createForm(new Endereco());
    this.listarUF();
    console.log(this)
  }

  avancar(){
    console.log('Enviei !!');
    this.router.navigate(['/home']);
  }

  async listarUF(){
    this.ufService.listarUF().subscribe({ next: ((result) => { this.listaUFs = result }),
    error:((error) => {
      console.log('Erorr occurred' + error)
    }),
    complete:(() => {
      // aqui é chamado um métod que realiza o preenchimento do formulário html com os dados retornados da api
      console.log(this.listaUFs.toString());
    })
    })

  }

  async consultaCEP(){
    // crio uma constante que receberá do formulário html/ controle o valor do cep
    const cepValue = this.frmEndereco.controls['cep'].value;
    //invoco o método do serviço (service) getEndereco que retorna o objeto observable
    // é chamado o método subscribe que contém para onde será enviado o retorno da pi,
    // que neste caso é o objeto endereco
    this.viaCep.getEndereco(cepValue).subscribe({ next: ((result) => { this.endereco = result }),
    error:((error) => {
      console.log('Erorr occurred' + error)
    }),
    complete:(() => {
      // aqui é chamado um métod que realiza o preenchimento do formulário html com os dados retornados da api
      this.populaEndereco(this.endereco);
    })
    })
  }

  //método onde é criado o meu formulário e já o popula com os valores
  // do objeto endereco, ou seja, caso meu objeto endereco esteja populado então o formulário
  // será criado já populado.
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
    this.frmEndereco.controls['cidade'].setValue(endereco.localidade);
    this.frmEndereco.controls['bairro'].setValue(endereco.bairro);
  }
}
