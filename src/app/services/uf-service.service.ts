import { Uf } from './../model/uf';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UfServiceService {

  private readonly apiUrl = "http://localhost:3000/unidade-federativa"; // armazena a url da api

  constructor(private http: HttpClient) { }

  listarUF(): Observable<Uf[]> {
    return this.http.get<Uf[]>(this.apiUrl)
    .pipe(map((rs) => rs));
  }

}
