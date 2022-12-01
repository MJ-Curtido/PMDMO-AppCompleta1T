import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {
  miFormulario!: FormGroup;
  controlUsuario!: FormControl;
  controlContrasenya!: FormControl;

  constructor() {  }

  ngOnInit(): void {
    this.controlUsuario = new FormControl('', [
      Validators.minLength(3),
      Validators.required
    ]);

    this.controlContrasenya = new FormControl('', [
      Validators.minLength(7),
      Validators.pattern('(?=.*[@*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).+'),
      Validators.required
    ]);

    this.miFormulario = new FormGroup({
      controlUsuario: this.controlUsuario,
      controlContrasenya: this.controlContrasenya
    });
  }
}