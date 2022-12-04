import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css'],
})
export class EstiloComponent implements OnInit {
  @Output() enviarModo = new EventEmitter<Number>();
  modo: Number; //0: claro  1: oscuro
  modoTxt: String;

  constructor() {
    this.modo = 1;
    this.modoTxt = 'Modo Claro';
  }

  ngOnInit(): void {}

  cambiarModo() {
    if (this.modo == 0) {
      this.modo = 1;
      this.modoTxt = "Modo Claro";
    }
    else {
      this.modo = 0;
      this.modoTxt = "Modo Oscuro";
    }
    this.enviarModo.emit(this.modo);
  }
}
