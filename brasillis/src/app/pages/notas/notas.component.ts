import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  standalone: false,

  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css',
})
export class NotasComponent {
  alunos: any = [
    { nome: 'Ana', nota1: 8, nota2: 9 },
    { nome: 'Julio', nota1: 7, nota2: 8 },
    { nome: 'Letícia', nota1: 3, nota2: 2 },
    { nome: 'Ricardo', nota1: 7, nota2: 7 },
  ];
}
