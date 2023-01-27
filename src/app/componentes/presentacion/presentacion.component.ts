import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  miPortfolio:any;
  form: FormGroup;
  presEdit: any;


  constructor(private datosPortfolio:PortfolioService,  private formbuilder: FormBuilder, private autenService: AutenticacionService) { 
    this.form = this.formbuilder.group({

      id:["",Validators.required],
      nombre:["", Validators.required],
      sobre_mi:["", Validators.required],
      motivo:["", Validators.required],
      img_persona: ["", Validators.required]
   })
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

 verPres(presEdit: any): void{
    this.datosPortfolio.buscarPres(presEdit.id).subscribe(data =>{    
      this.form.patchValue({
        id: data.id,
        nombre: data.nombre,
        sobre_mi: data.sobre_mi,
        motivo: data.motivo,
        img_persona: data.img_persona,
      })
      this.presEdit=data; 
      console.log(data); 
    }); 
  }

  modPres(){
    this.datosPortfolio.modificarPres(this.form.value).subscribe(data =>{
    console.log(data);
    this.presEdit=data;
  }); 
}

iniciado(){
  return this.autenService.logged();
 } 
  
}
