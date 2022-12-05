import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioService } from '../modelo/servicio.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLogueoGuard implements CanActivate {
  constructor(protected serv: ServicioService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.serv.getIniciado()) {
      return true;
    } else {
      return false;
    }
  }
  
}
