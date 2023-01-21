import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any;
  form: FormGroup;

  constructor(private datosPortfolio: PortfolioService, private formbuilder: FormBuilder) { 
    this.form = this.formbuilder.group({

      id:["",Validators.required],
      titulo:["", Validators.required],
      subtitulo:["", Validators.required],
      descripcion:["", Validators.required],
      logo: ["", Validators.required]
   })
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.estudios=data.listaEstudios;
    });
  }

  newEst(event: Event, id: any){
    event.preventDefault;
    this.datosPortfolio.nuevoEst(this.form.value, id).subscribe(data =>{
    });
  }

}
