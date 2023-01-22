import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El servicio de autenticación esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }

  IniciarSesion(email: any, password: any):Observable<any>{
    return this.http.post(this.url + "/" + email + "/" + password, credenciales).pipe(map(data=>{
      return data;
    }))
  }
}
