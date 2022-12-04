import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Página principal';

  constructor() {
    document.body.className = "bodyOscuro";
  }

  cambiarModo(modo: Number) {
    if (modo == 0) {
      document.body.className = "bodyClaro";
    } else {
      document.body.className = "bodyOscuro";
    }
  }
}
