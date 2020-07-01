import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-nota-add',
  templateUrl: './nota-add.component.html'
})
export class NotaAddComponent {
  @Input() nota: any = {};
  constructor() { }

}
