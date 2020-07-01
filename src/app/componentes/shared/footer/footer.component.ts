import { Component, OnInit } from '@angular/core';
import { NodeWithI18n } from '@angular/compiler';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor() { }
      fecha: Date        = new Date();
  ngOnInit(): void {
  }

}
