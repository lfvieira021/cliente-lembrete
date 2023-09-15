import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { FormLembreteComponent } from './paginas/form-lembrete/form-lembrete.component';
import { CriarComponent } from './paginas/criar/criar.component';
import { EditarComponent } from './paginas/editar/editar.component';

const routes: Routes = [
  { path: "", component: ListaLembreteComponent },
  { path: "criar", component: CriarComponent },
  { path: "editar/:id", component: EditarComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
