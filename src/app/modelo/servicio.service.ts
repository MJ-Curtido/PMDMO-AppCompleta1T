import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  listaUsuarios: Usuario[];

  constructor() {
    this.listaUsuarios = [
      new Usuario('manu', 'Dam1234@'),
      new Usuario('pablo', 'Dam1234@'),
      new Usuario('marta', 'Dam1234@'),
    ];
  }

  getListaUsuarios() {
    return this.listaUsuarios;
  }

  getUsuario(ind: number) {
    return this.listaUsuarios[ind];
  }

  anadirBroma(usuario: Usuario) {
    let existe: Boolean = false;

    for (let i = 0; i < this.listaUsuarios.length && !existe; i++) {
      if (this.listaUsuarios[i].getNomUsuario() == usuario.getNomUsuario()) {
        existe = true;
      }
    }

    if (existe) {
      this.listaUsuarios.unshift(usuario);
    }
  }

  eliminarUsuarioServ(usuario: Usuario) {
    this.listaUsuarios = this.listaUsuarios.filter(
      (usuarioServ) => usuarioServ.getNomUsuario() !== usuario.getNomUsuario()
    );
  }

  comprobarInicioSesion(nomUsuario: String, contrasenya: String) {
    let correcto: Boolean = false;

    for (let i = 0; i < this.listaUsuarios.length && !correcto; i++) {
      if (this.listaUsuarios[i].getNomUsuario() == nomUsuario && this.listaUsuarios[i].getContrasenya() == contrasenya) {
        correcto = true;
      }
    }

    return correcto;
  }
}
