import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  @Input() noticia!: Noticia;

  constructor(protected serv: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  detallesNoticia() {
    this.router.navigate(['detalle', this.noticia.getId()]);
  }

  getModo() {
    return this.serv.getModo();
  }

  eliminarNoticia() {
    this.serv.eliminarNoticia(this.noticia);
  }
}
