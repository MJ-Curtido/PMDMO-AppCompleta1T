import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Noticia } from './noticia';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  private listaUsuarios: Usuario[];
  private listaNoticias: Noticia[];
  private iniciado: Boolean;
  private modo: Boolean;
  private _listaUsuarios$: BehaviorSubject<Usuario[]>;
  private _listaNoticias$: BehaviorSubject<Noticia[]>;

  constructor() {
    this.listaUsuarios = [
      new Usuario('manu', 'Dam1234@'),
      new Usuario('pablo', 'Dam1234@'),
      new Usuario('marta', 'Dam1234@'),
    ];
    this._listaUsuarios$ = new BehaviorSubject<Usuario[]>(this.listaUsuarios);
    this.listaNoticias = [
      new Noticia(
        'Sale Hollow Knight SilkSong',
        'En Febrero sale el nuevo juego de plataformas que lo petó con sus inicios.'
      ),
      new Noticia(
        'Desarrollo de Aplicaciones Multiplataforma (DAM)',
        'DAM es uno de los grados que exigen más nivel y con un filtro que hace que los estudiantes que salen de ahí van muy preparados.'
      ),
      new Noticia(
        'Patata',
        'Mi ordenador es una patata con cables y va muy mal a la hora de hacer cualquier cosa, sobre todo con Android Studio.'
      ),
    ];
    this._listaNoticias$ = new BehaviorSubject<Noticia[]>(this.listaNoticias);

    this.iniciado = false;
    this.modo = true;
  }

  getListaNoticias(): Noticia[] {
    return [...this.listaNoticias];
  }

  getListaUsuarios(): Usuario[] {
    return [...this.listaUsuarios];
  }

  getListaNoticias$(): Observable<Noticia[]> {
    return this._listaNoticias$.asObservable();
  }

  getListaUsuarios$(): Observable<Usuario[]> {
    return this._listaUsuarios$.asObservable();
  }

  getUsuario(ind: number) {
    return this.listaUsuarios[ind];
  }

  getModo() {
    return this.modo;
  }

  setModo(modo: Boolean) {
    return (this.modo = modo);
  }

  anyadirNoticia(noticia: Noticia) {
    this.listaNoticias.unshift(noticia);
    this._listaNoticias$.next([...this.listaNoticias]);
  }

  eliminarNoticia(noticia: Noticia) {
    this.listaNoticias = this.listaNoticias.filter(
      (noticiaServ) => noticiaServ.getId() !== noticia.getId()
    );
    this._listaNoticias$.next([...this.listaNoticias]);
  }

  getNoticia(id: String) {
    let noticia: any = null;

    for (let i = 0; i < this.listaNoticias.length && noticia == null; i++) {
      if (this.listaNoticias[i].getId() == id) {
        noticia = this.listaNoticias[i];
      }
    }

    return noticia;
  }

  comprobarInicioSesion(nomUsuario: String, contrasenya: String) {
    let correcto: Boolean = false;

    for (let i = 0; i < this.listaUsuarios.length && !correcto; i++) {
      if (
        this.listaUsuarios[i].getNomUsuario() == nomUsuario &&
        this.listaUsuarios[i].getContrasenya() == contrasenya
      ) {
        correcto = true;
        this.iniciado = true;
      }
    }

    return correcto;
  }

  getIniciado() {
    return this.iniciado;
  }
}
