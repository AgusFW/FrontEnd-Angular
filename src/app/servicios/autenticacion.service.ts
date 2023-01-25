import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  IniciarSesion(password: any, email: any, login: any):Observable<any>{
    return this.http.post(this.url + "/login/" + password + "/" + email, login);
  }
}
