import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareasService } from '../../services/tareas.service';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html'
})
export class TareasComponent {
  tarea: Tarea;
   validar = true;
  constructor( public tareasService: TareasService) { }
  tamanio(){
    return this.tareasService.tamanio();
  }
  agregarTarea( termino: string ){
    this.tareasService.agregarTarea(termino) ;
    (document.getElementById('text') as HTMLInputElement).autofocus = true;
    (document.getElementById('text') as HTMLInputElement).value = "";
    console.log('Aqui llega');
  }
  cheked(tarea: Tarea){
      this.tareasService.cheked(tarea);
}
  borrar(){
        this.tareasService.borrar();
  }
  hayActivos(){
    return this.tareasService.hayActivos();
  }
  borrarCompletados(){
    this.tareasService.borrarCompletados();
  }
}

