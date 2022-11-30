import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstiloComponent } from './componentes/estilo/estilo.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { BlogComponent } from './componentes/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    LogueoComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
