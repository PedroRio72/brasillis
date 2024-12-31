import { Component, EventEmitter, Optional, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css',
})
export class BotaoComponent {
  @Output() acao = new EventEmitter<any>();
  click() {
    this.acao.emit();
  }
}
