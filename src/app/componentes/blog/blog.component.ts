import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  protected miFormulario!: FormGroup;
  protected controlTitulo!: FormControl;
  protected controlContenido!: FormControl;

  constructor(protected serv: ServicioService) {}

  ngOnInit(): void {
    this.controlTitulo = new FormControl('', [
      Validators.minLength(1),
      Validators.required,
    ]);

    this.controlContenido = new FormControl('', [
      Validators.minLength(1),
      Validators.required,
    ]);

    this.miFormulario = new FormGroup({
      controlTitulo: this.controlTitulo,
      controlContenido: this.controlContenido,
    });
  }

  getModo() {
    return this.serv.getModo();
  }

  anyadirNoticia(titulo: HTMLInputElement, contenido: HTMLInputElement) {
    this.serv.anyadirNoticia(new Noticia(titulo.value, contenido.value));
  }
}
