import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url: string = 'http://localhost:8080';

  constructor(private http:HttpClient) { };

  obtenerDatos():Observable<any>{
    return this.http.get(this.url + "/ver/persona/9");
  }

  /* Presentación */

  buscarPres(id:any):Observable<any>{
    return this.http.get(this.url + "/ver/persona/" + id)
  }

  modificarPres(miPortfolio: any):Observable<any>{
    return this.http.put(this.url + "/change/persona", miPortfolio)
  }

   /* Experiencia */

  nuevaExp(experiencia:any, id:any):Observable<any>{
    return this.http.post(this.url + "/new/experiencia/" + id, experiencia); 
  }

  modificarExp(experiencia: any):Observable<any>{
    return this.http.put(this.url + "/change/experiencia", experiencia);
  }

  buscarExp(id:any):Observable<any>{
    return this.http.get(this.url + "/buscar /experiencia/"+ id);
  }

  borrarExp(id:any):Observable<any>{
    return this.http.delete(this.url + "/delete/experiencia/" + id);
  }

  /* Estudios */

  nuevoEst(estudios:any, id:any):Observable<any>{
    return this.http.post(this.url + "/new/estudio/" + id, estudios);
  }

  modificarEst(estudio: any): Observable<any>{
    return this.http.put(this.url + "/change/estudio", estudio);
  }

  buscarEst(id:any):Observable<any>{
    return this.http.get(this.url + "/buscar /estudio/" + id)
  }

  borrarEst(id:any):Observable<any>{
    return this.http.delete(this.url + "/delete/estudio/" + id)
  }

} 
