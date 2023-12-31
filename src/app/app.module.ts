import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMsgComponent } from './shared/error-msg/error-msg.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';
import { FormLembreteComponent } from './paginas/form-lembrete/form-lembrete.component';
import { FormsModule } from '@angular/forms';
import { CriarComponent } from './paginas/criar/criar.component';
import { EditarComponent } from './paginas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaLembreteComponent,
    FormLembreteComponent,
    CriarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
