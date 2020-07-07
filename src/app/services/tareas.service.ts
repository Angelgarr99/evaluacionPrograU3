import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
    constructor(){
        this.cargarSorage();
    }
  Tarea: Tarea[] = [];
  agregarTarea( termino: string ){
    if (termino.length > 0){
      const index = this.Tarea.length + 1;
      const tareaAux = new Tarea(termino, index);
      this.Tarea.push(tareaAux);
    }
    this.guardarSorage();
  }
  cheked(tarea: Tarea){
        for ( let i = 0; i < this.Tarea.length; i++ ){
            let tareaAux = this.Tarea[i];
            if (tarea.index === tareaAux.index){
            this.Tarea[i].realizada = true;
            }
            console.log(this.Tarea);
            this.guardarSorage();
        }
    }
    borrar(){
        this.Tarea.splice(0, this.Tarea.length);
        this.guardarSorage();
    }
    hayActivos(){
        for ( let i = 0; i < this.Tarea.length; i++ ){
          if (this.Tarea[i].realizada){
            return true;
          }
        }
        return false;
      }
      borrarCompletados(){
        for ( let i = this.Tarea.length - 1; i >= 0; i-- ){
          let tarea = this.Tarea[i];
          if (tarea.realizada){
            this.Tarea.splice(i , 1);
          }
        }
        for ( let i = 0; i < this.Tarea.length; i++ ){
          this.Tarea[i].index = i + 1;
        }
        this.guardarSorage();
      }
      tamanio(){
          return this.Tarea.length;
      }



  guardarSorage(){
    localStorage.setItem('data', JSON.stringify(this.Tarea));
    console.log('LE');
    console.log(this.Tarea);
  }
  cargarSorage(){
    if ( localStorage.getItem('data') ){
      this.Tarea = JSON.parse(localStorage.getItem('data'));
    }else{
      this.Tarea = [];
    }
  }
}
