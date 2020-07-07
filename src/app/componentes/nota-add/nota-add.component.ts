import { Component} from '@angular/core';
import { Nota } from '../../models/notas.model';
import { NotasService } from '../../services/notas.service';


@Component({
  selector: 'app-nota-add',
  templateUrl: './nota-add.component.html'
})
export class NotaAddComponent {
  nota: Nota[] = [];
  constructor(public notaService: NotasService ) { }

}
