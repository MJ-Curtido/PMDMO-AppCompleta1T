import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { LogueoComponent } from './componentes/logueo/logueo.component';

const routes: Routes = [
  { path: '', component: LogueoComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }