import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
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

  constructor(private datosPortfolio: PortfolioService, private formbuilder: FormBuilder, private autenService: AutenticacionService) { 
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
    })
  }

  newExp(event: Event, id: any){
    event.preventDefault;
    this.datosPortfolio.nuevaExp(this.form.value, id).subscribe(data =>{
    });
  }

  verExp(expeEdit: any): void{
    this.datosPortfolio.buscarExp(expeEdit.id).subscribe(data =>{    
      this.form.patchValue({
        id: data.id,
        titulo: data.titulo,
        logo_puesto: data.logo_puesto,
        puesto: data.puesto,
        tarea_puesto: data.tarea_puesto,
        herramientas: data.herramientas
      })
      this.expeEdit=data; 
      console.log(data); 
    }); 
  }

  modExp(){
    this.datosPortfolio.modificarExp(this.form.value).subscribe(data =>{
      console.log(data);
      this.expeEdit=data;
    }); 
  }

  deleteExp(id: any){
    this.datosPortfolio.borrarExp(id).subscribe(data =>{
    });
  }

  iniciado(){
    return this.autenService.logged();
   }
}