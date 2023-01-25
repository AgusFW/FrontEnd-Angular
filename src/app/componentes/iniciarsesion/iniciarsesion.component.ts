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
  login: any;

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) { 
    this.login = false;
    this.form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
  })
  }

  ngOnInit(): void {}

  get Email () {
    return this.form.get('email');
  }

  get Password (){
    return this.form.get('password');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value.email, this.form.value.password, this.form.value).subscribe(data =>{
    this.login= data;
    console.log(this.login);
    });
    if (this.login == false){
      this.ruta.navigate(['/iniciarsesion']);
    } if (this.login == true){
        this.ruta.navigate(['/portfolio']);
    }
  }

}
