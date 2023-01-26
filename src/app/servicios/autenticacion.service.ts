import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {
  url: string = 'http://localhost:8080';
  login: any;

  constructor(private http:HttpClient, private ruta:Router) { 
    this.login = false;
   }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url + "/ver/persona/9");
  }

  IniciarSesion(password: any, email: any):Observable<any>{
    return this.http.get(this.url + "/login/" + password + "/" + email).pipe(map(data => {
      this.login = data;
      if (this.login == true){
        console.log("entro al true");
        this.ruta.navigate(['/portfolio']);
      } else if (this.login == false){
        console.log (this.login);
        console.log("entro al false");
        this.ruta.navigate(['/iniciarsesion']);  
        alert("El email o contraseña son incorrectos");    
      }
    }));

  }

  logged(){
    return this.login == true; 
  }
}
