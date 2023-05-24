import { Endereco } from './../cad-endereco/endereco';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCEPService {

  private apiUrl = "https://viacep.com.br/ws/";
  private cepObs!: Observable<Endereco>;
  private endereco: Endereco;

  constructor(private http: HttpClient) {
    this.endereco = new Endereco();
  }
/*
  async consultaCEP( cep: string): Promise<Endereco>{
    this.http.get<Endereco>(this.apiUrl + cep + "/json/")
            .subscribe(response => { this.endereco = response });

    //console.log('funcao: ' + this.endereco.logradouro);
    return this.endereco;
  }
*/

  getEndereco(cep: string): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.apiUrl + cep + "/json/")
      .pipe(
        tap(_=> console.log('Endereco:' + cep)),
        catchError(this.handleError<Endereco[]>(`Get Endereco cep=${cep}`))
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
