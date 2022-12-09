import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { DetalleNoticiaComponent } from './componentes/detalle-noticia/detalle-noticia.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';
import { GuardLogueoGuard } from './guards/guard-logueo.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogueoComponent },
  {path: 'blog', component: BlogComponent, canActivate: [GuardLogueoGuard]},
  {path: 'detalle/:idNoticia', component: DetalleNoticiaComponent, canActivate: [GuardLogueoGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }