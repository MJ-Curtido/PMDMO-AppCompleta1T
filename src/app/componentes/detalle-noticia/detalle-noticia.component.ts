import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/modelo/noticia';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css'],
})
export class DetalleNoticiaComponent implements OnInit, OnDestroy {
  private sub: any;
  protected idNoticia!: String;
  protected noticia!: Noticia;

  constructor(
    protected serv: ServicioService,
    private routerActivo: ActivatedRoute,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.routerActivo.params.subscribe((params) => {
      this.idNoticia = params['idNoticia'];
    });
    console.log(this.idNoticia);
    this.noticia = this.serv.getNoticia(this.idNoticia);
  }

  getModo() {
    return this.serv.getModo();
  }

  btnVolverPulsado() {
    this.router.navigate(['blog']);
  }
}
