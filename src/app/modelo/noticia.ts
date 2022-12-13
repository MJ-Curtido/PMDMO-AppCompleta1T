import {v4 as uuidv4} from 'uuid';

export class Noticia {
    private id: String
    private titulo: String;
  private contenido: String;
  private fechaCreacion: Date;

  constructor(titulo: String, contenido: String) {
    this.id = uuidv4();
    this.titulo = titulo;
    this.contenido = contenido;
    this.fechaCreacion = new Date();
  }

  getId(): String {
    return this.id;
  }

  getTitulo(): String {
    return this.titulo;
  }

  setTitulo(titulo: String) {
    this.titulo = titulo;
  }

  getContenido(): String {
    return this.contenido;
  }

  setContenido(contenido: String) {
    this.contenido = contenido;
  }

  getFechaCreacion(): Date {
    return this.fechaCreacion;
  }

  setFechaCreacion(fechaCreacion: Date) {
    this.fechaCreacion = fechaCreacion;
  }
}