import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  url: string = 'http://localhost:8080';

  constructor(private http:HttpClient) { 
   }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url + "/ver/persona/9");
  }

  IniciarSesion(credenciales: any, email:any, password: any):Observable<any>{
    return this.http.post(this.url + "/" + email + "/" + password, credenciales);
  }
}
