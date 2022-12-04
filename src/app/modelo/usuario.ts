export class Usuario {
  private nomUsuario: String;
  private contrasenya: String;

  constructor(nomUsuario: String, contrasenya: String) {
    this.nomUsuario = nomUsuario;
    this.contrasenya = contrasenya;
  }

  getNomUsuario() {
    return this.nomUsuario;
  }

  setNomUsuario(nomUsuario: String) {
    this.nomUsuario = nomUsuario;
  }

  getContrasenya() {
    return this.contrasenya;
  }

  setContrasenya(contrasenya: String) {
    this.contrasenya = contrasenya;
  }
}
