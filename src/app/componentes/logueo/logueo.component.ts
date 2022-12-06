import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css'],
})
export class LogueoComponent implements OnInit {
  miFormulario!: FormGroup;
  controlUsuario!: FormControl;
  controlContrasenya!: FormControl;
  incorrecto: Boolean;

  constructor(protected serv: ServicioService, private router: Router) {
    this.incorrecto = false;
  }

  ngOnInit(): void {
    this.controlUsuario = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]);

    this.controlContrasenya = new FormControl('', [
      Validators.minLength(7),
      Validators.pattern('(?=.*[@*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).+'),
      Validators.required,
    ]);

    this.miFormulario = new FormGroup({
      controlUsuario: this.controlUsuario,
      controlContrasenya: this.controlContrasenya,
    });
  }

  getModo() {
    return this.serv.getModo();
  }

  comprobarInicioSesion(
    nomUsuario: HTMLInputElement,
    contrasenya: HTMLInputElement
  ) {
    if (this.serv.comprobarInicioSesion(nomUsuario.value, contrasenya.value)) {
      this.router.navigate(['blog']);
    }
    else {
      this.incorrecto = true;
    }
  }
}
