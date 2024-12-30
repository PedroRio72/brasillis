import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
})
export class HomeComponent {
  nome: string = 'Teste';
  idade: number = 20;
  imagem: string = '../../../assets/dia.jpg';
  exibir: boolean = false;
  txtCaptionExibirImagem: string = 'Exibir Imagem';
  nomes: string[] = ['Lucas', 'Amanda', 'Rafael', 'Juliana', 'Carlos'];
  linguagem: string = 'HTML';
  boolCorCSS: boolean = false;
  lista: string[] = [
    'Aprovado',
    'Aprovado',
    'Reprovado',
    'Aprovado',
    'Reprovado',
    'Reprovado',
  ];

  mensagem() {
    alert('Hello World!');
  }
  add() {
    this.idade++;
  }
  sub() {
    this.idade--;
  }
  mudaImagem() {
    if (this.imagem === '../../../assets/dia.jpg') {
      this.imagem = '../../../assets/noite.jpg';
    } else {
      this.imagem = '../../../assets/dia.jpg';
    }
  }
  exibirImagem() {
    this.exibir = !this.exibir;
    this.txtCaptionExibirImagem = this.exibir
      ? 'Esconder Imagem'
      : 'Exibir Imagem';
  }
}
