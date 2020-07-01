import { Component, } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html'
})
export class NotasComponent {
  nota: Nota[] = [];

  constructor() { }
  agregarNota( tit: string, desc: string, imp: string ){
    if (tit.length > 0 && desc.length > 0 && imp !== 'null' ){
      this.nota.push({  titulo: tit, descripcion: desc,   importancia: imp, fecCre: new Date()});
      (document.getElementById('text') as HTMLInputElement).autofocus = true;
      (document.getElementById('text') as HTMLInputElement).value = "";
      (document.getElementById('text2') as HTMLInputElement).value = "";
      (document.getElementById('validatedInputGroupSelect') as HTMLInputElement).value = "null";
    }

  }


}
export interface Nota{
  titulo: string;
  descripcion: string;
  fecCre: Date;
  importancia: string;
}

