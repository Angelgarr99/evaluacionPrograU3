import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html'
})
export class TareasComponent {
  tarea: Tarea[] = [];
   validar = true;
  constructor() { }

  agregarTarea( termino: string ){
    if (termino.length > 0){
      console.log(termino.length);
      this.tarea.push({ index: (this.tarea.length + 1), nombre: termino, realizada: false,   deabilitar:""});
      (document.getElementById('text') as HTMLInputElement).autofocus = true;
      (document.getElementById('text') as HTMLInputElement).value = "";

    }

  }


  cheked(index: number){
  for ( let i = 0; i < this.tarea.length; i++ ){
    let tarea = this.tarea[i];
    if (tarea.index === index){
      this.tarea[i].realizada = true;
    }
  }
}
borrar(){
  this.tarea.splice(0, this.tarea.length);
}
hayActivos(){
  for ( let i = 0; i < this.tarea.length; i++ ){
    if (this.tarea[i].realizada){
      return true;
    }
  }
  return false;
}
borrarCompletados(){
  for ( let i = this.tarea.length - 1; i >= 0; i-- ){
    let tarea = this.tarea[i];
    if (tarea.realizada){
      this.tarea.splice(i , 1);
    }
  }
  for ( let i = 0; i < this.tarea.length; i++ ){
    this.tarea[i].index = i + 1;
  }
}
}
export interface Tarea{
  nombre: string;
  realizada: boolean;
  index: number;
  deabilitar: string;
}
