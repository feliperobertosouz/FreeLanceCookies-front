import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from '../model/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertasServiceService {
  private apiUrl = 'http://localhost:8080/api/ofertas';
  constructor(private http: HttpClient) { }

  getOfertas() {
    return this.http.get<Oferta[]>(this.apiUrl);
  }

  getOfertaById(id: number) {
    return this.http.get<Oferta>(`${this.apiUrl}/${id}`);
  }
}
