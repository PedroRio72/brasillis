import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule, MatButtonModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css',
})
export class Form1Component {
  @Output() callback = new EventEmitter<string>();

  nome: string = '';

  salvar() {
    this.callback.emit(this.nome);
  }
}
