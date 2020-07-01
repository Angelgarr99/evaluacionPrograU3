import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea-add',
  templateUrl: './tarea-add.component.html'
})
export class TareaAddComponent implements OnInit {
  @Input() tarea: any = {};
  @Output() tareaSeleccionada: EventEmitter<number>;
  constructor() {
    this.tareaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }
  cheked(index: number){
    // this.router.navigate( ['/heroe', this.index] );
    // console.log(this.index);
     this.tareaSeleccionada.emit(index);
  }


}
