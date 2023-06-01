// Imports de libs/ bibliotecas de terceiro
import { Endereco } from './../cad-endereco/endereco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViaCEPService {

  //Propriedades 
  private apiUrl = "https://viacep.com.br/ws/"; // armazena a url da api
  // objeto observador responsável por nos trazer o retorno da api
  private cepObs!: Observable<Endereco>; 
  // classe model que irá armazenar o meu endereço completo
  private endereco: Endereco;

  // aqui é são inicializados os objetos que precisaremos para executar este serviço.
  // injetamos a dependencia do httpClient
  constructor(private http: HttpClient) {
    this.endereco = new Endereco(); // cria objeto vazio
  }
// criação do método que realiza a chamada da api via cep;
// este método recebe o cep e devolve um objeto observable com o objeto endereço dentro dele
getEndereco(cep: string): Observable<Endereco> {
// a chamada acontece invocando o objeto http definido no construtor desta classe.
// utilizo aqui o map que irá mapear o retorno da api para o objeto o qual foi 
//referenciado no método get (Endereco)
  return this.http.get<Endereco>(this.apiUrl + cep + "/json/")
    .pipe(map((rs) => rs));
}
}
