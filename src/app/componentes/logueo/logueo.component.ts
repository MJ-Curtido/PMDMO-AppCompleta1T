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
      Validators.pattern('^[A-Za-z0-9_]+$'),
      Validators.required
    ]);

    this.controlContrasenya = new FormControl('', [
      Validators.minLength(7),
      Validators.pattern('[A-Z]+'),
      Validators.pattern('[a-z]+'),
      Validators.pattern('[0-9]+'),
      Validators.pattern('[@*]+'),
      Validators.pattern('^[A-Za-z0-9@*]+$'),
      Validators.required
    ])
  }

  
}
