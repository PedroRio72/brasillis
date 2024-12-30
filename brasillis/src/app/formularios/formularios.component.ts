import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css',
})
export class FormulariosComponent {
  nome: string = '';
  cidade: string = '';
}
