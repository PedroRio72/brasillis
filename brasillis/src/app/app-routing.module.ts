import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Alunos1Component } from './pages/alunos1/alunos1.component';
import { Clientes1Component } from './pages/clientes1/clientes1.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'alunos',
    component: Alunos1Component,
  },
  {
    path: 'clientes',
    component: Clientes1Component,
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
  },

  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
