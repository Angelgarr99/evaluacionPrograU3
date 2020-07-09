import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Rutas */

import { APP_ROUTING } from './app.routes';

/* Servicios */

/* Componentes */



import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { TareaAddComponent } from './componentes/tarea-add/tarea-add.component';
import { NotaAddComponent } from './componentes/nota-add/nota-add.component';
import { ValTxtDirective } from './directives/val-txt.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TareasComponent,
    NotasComponent,
    TareaAddComponent,
    NotaAddComponent,
    ValTxtDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
