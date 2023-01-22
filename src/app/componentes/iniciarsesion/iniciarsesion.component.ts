import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  form: FormGroup;
  credenciales: any;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
  this.form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  })
  }

  ngOnInit(): void {
    this.autenticacionService.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.credenciales=data;
    })
  }

  get Email () {
    return this.form.get('email');
  }

  get Password (){
    return this.form.get('password');
  }

  onEnviar(email:any, password:any){
    this.autenticacionService.IniciarSesion(this.form.value, email, password).subscribe(data =>{
    });
    this.ruta.navigate(['/portfolio'])
  }

}
