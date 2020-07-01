import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './componentes/notas/notas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
const APP_RUTES: Routes = [
    { path: 'tareas', component: TareasComponent },
    { path: 'notas', component: NotasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'tareas' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_RUTES);
