import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareasService } from '../../services/tareas.service';


@Component({
  selector: 'app-tarea-add',
  templateUrl: './tarea-add.component.html'
})
export class TareaAddComponent implements OnInit {
  tarea: Tarea[];
  @Output() tareaSeleccionada: EventEmitter<Tarea>;
  constructor(public tareasService: TareasService) {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {

  }
  cheked(tarea: Tarea){
    this.tareaSeleccionada.emit(tarea);
  }


}
