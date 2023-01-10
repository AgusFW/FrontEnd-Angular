import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url: string = 'http://localhost:8080/ver/persona/9';

  constructor(private http:HttpClient) { };

  obtenerDatos():Observable<any>{
    return this.http.get(this.url);
  }
} 
