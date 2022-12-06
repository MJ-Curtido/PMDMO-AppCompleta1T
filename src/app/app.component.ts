import { Component } from '@angular/core';
import { ServicioService } from './modelo/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Página principal';

  constructor(protected serv: ServicioService) {
    document.body.className = "bodyOscuro";
  }

  cambiarModo(modo: Boolean) {
    if (!modo) {
      document.body.className = "bodyClaro";
    } else {
      document.body.className = "bodyOscuro";
    }
    this.serv.setModo(modo);
  }
}
