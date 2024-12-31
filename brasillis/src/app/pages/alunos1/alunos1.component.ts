import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos1',
  standalone: false,

  templateUrl: './alunos1.component.html',
  styleUrl: './alunos1.component.css',
})
export class Alunos1Component {
  nomes: string[] = ['Alberto', 'Wagner', 'Cláudia', 'Roberta', 'André'];

  adicionar(pNome: string) {
    this.nomes.push(pNome);
  }

  remover() {
    this.nomes.splice(this.nomes.length - 1, 1);
  }
}
