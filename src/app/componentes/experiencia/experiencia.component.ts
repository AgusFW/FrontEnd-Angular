import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable, Subscriber } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any;
  form: FormGroup;
  expeEdit: any;

  constructor(private datosPortfolio: PortfolioService, private formbuilder: FormBuilder) { 
    this.form = this.formbuilder.group({

      id:["",Validators.required],
      titulo:["", Validators.required],
      logo_puesto:["", Validators.required],
      puesto:["", Validators.required],
      tarea_puesto: ["", Validators.required],
      herramientas:["", Validators.required]
   })
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experiencias=data;
    });
  }

  newExp(event: Event, id: any){
    event.preventDefault;
    this.datosPortfolio.nuevaExp(this.form.value, id).subscribe(data =>{
    });
  }

  modExp(event: Event, id: any){
    event.preventDefault;
    this.datosPortfolio.modificarExp(this.form.value).subscribe(data =>{
      console.log(data);
      this.experiencias=data;
    }); 
  }

  verExp(expeEdit: any): void{
    this.datosPortfolio.buscarExp(expeEdit).subscribe(data =>{
      this.expeEdit=data;
      console.log(data);
      this.form.patchValue({
        id: data.id,
        titulo: data.titulo,
        logo_puesto: data.logo_puesto,
        puesto: data.puesto,
        tarea_puesto: data.tarea_puesto,
        herramientas: data.herramientas
      })
    }); 
  }

  deleteExp(id: any){
    this.datosPortfolio.borrarExp(id).subscribe(data =>{
    })
  }
}
