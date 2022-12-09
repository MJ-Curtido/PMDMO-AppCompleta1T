import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstiloComponent } from './componentes/estilo/estilo.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { GuardLogueoGuard } from './guards/guard-logueo.guard';
import { NoticiaComponent } from './componentes/noticia/noticia.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    LogueoComponent,
    BlogComponent,
    NoticiaComponent,
    DetalleNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    GuardLogueoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
