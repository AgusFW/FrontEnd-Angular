import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url: string = 'http://localhost:8080/ver/persona/9';
  url2: string = 'http://localhost:8080';

  constructor(private http:HttpClient) { };

  obtenerDatos():Observable<any>{
    return this.http.get(this.url);
  }

  nuevaExp(experiencia:any, id:any):Observable<any>{
    return this.http.post(this.url2 + "/new/experiencia/" + id, experiencia); 
  }

  modificarExp(experiencia: any):Observable<any>{
    return this.http.put(this.url2 + "/change/experiencia", experiencia);
  }

  buscarExp(id:any):Observable<any>{
    return this.http.get(this.url2 + "/buscar /experiencia/"+ id);
  }

  borrarExp(id:any):Observable<any>{
    return this.http.delete(this.url2 + "/delete/experiencia/" + id);
  }

  nuevoEst(estudios:any, id:any):Observable<any>{
    return this.http.post(this.url2 + "/new/estudio/" + id, estudios);
  }
} 
