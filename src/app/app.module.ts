import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstiloComponent } from './componentes/estilo/estilo.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { GuardLogueoGuard } from './guards/guard-logueo.guard';

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    LogueoComponent,
    BlogComponent
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
