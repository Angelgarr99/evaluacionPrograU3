import { Injectable } from '@angular/core';
import { Nota } from '../models/notas.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {


  constructor() {
    this.cargarrSorage();
  }
  nota: Nota[] = [];

  crearNota( titulo: string, descr: string, importancia: string){
    const nuevaNota = new Nota(titulo, descr, importancia);
    this.nota.push(nuevaNota);
    this.guardarSorage();
  }
  editaNota( nuevoTitulo: string, descr: string, importancia: string, nota: Nota){
    nota.titulo = nuevoTitulo;
    nota.descripcion = descr;
    nota.importancia = importancia;
    this.guardarSorage();
  }
  borrarNotas(){
    this.nota.splice(0, this.nota.length);
    this.guardarSorage();
}

  guardarSorage(){
    localStorage.setItem('notas', JSON.stringify(this.nota));
  }
  cargarrSorage(){
    if ( localStorage.getItem('notas') ){
      this.nota = JSON.parse(localStorage.getItem('notas'));
    }else{
      this.nota = [];
    }

  }
}
