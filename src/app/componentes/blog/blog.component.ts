import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/modelo/servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(protected serv: ServicioService) { }

  ngOnInit(): void {
  }

  getModo() {
    return this.serv.getModo();
  }
}
