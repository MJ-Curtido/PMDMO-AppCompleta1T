import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css'],
})
export class EstiloComponent implements OnInit {
  @Output() enviarModo = new EventEmitter<Boolean>();
  modo: Boolean;
  modoTxt: String;

  constructor() {
    this.modo = true;
    this.modoTxt = 'Modo Claro';
  }

  ngOnInit(): void {}

  cambiarModo() {
    if (this.modo) {
      this.modo = false;
      this.modoTxt = "Modo Claro";
    }
    else {
      this.modo = true;
      this.modoTxt = "Modo Oscuro";
    }
    this.enviarModo.emit(this.modo);
  }
}
