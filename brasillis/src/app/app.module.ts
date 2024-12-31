import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/page1/page1.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { ModalComponent } from './modal/modal.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactformComponent } from './reactform/reactform.component';
import { Clientes1Component } from './pages/clientes1/clientes1.component';
import { MediaPipe } from './pipies/media.pipe';
import { NotasComponent } from './pages/notas/notas.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Form1Component } from './formularios/form1/form1.component';
import { Lista1Component } from './listas/lista1/lista1.component';
import { Alunos1Component } from './pages/alunos1/alunos1.component';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    MediaPipe,
    NotasComponent,
    Alunos1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    ControlflowComponent,
    FormulariosComponent,
    ReactformComponent,
    Clientes1Component,
    ProdutosComponent,
    Form1Component,
    Lista1Component,
    BotaoComponent,
  ],
  providers: [provideHttpClient(withFetch()), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
