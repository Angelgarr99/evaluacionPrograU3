import { Component } from '@angular/core';
import { Nota } from '../../models/notas.model';
import { NotasService } from '../../services/notas.service';
@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html'
})
export class NotasComponent {
  nota: Nota[] = [];
  tit="";
  des="";
  opti="null";
  
  constructor(public notasService: NotasService) { }
  agregarNota( tit: string, desc: string, imp: string ){
    if (tit.length > 0 && desc.length > 0 && imp !== 'null' ){
      this.notasService.crearNota(tit, desc, imp);
      this.tit="";
      this.des="";
      this.opti="null";
      //  (document.getElementById('text') as HTMLInputElement).autofocus = true;
      // (document.getElementById('text') as HTMLInputElement).value = "";
      // (document.getElementById('text2') as HTMLInputElement).value = "";
      // (document.getElementById('validatedInputGroupSelect') as HTMLInputElement).value = "null";
     }
  }
}
