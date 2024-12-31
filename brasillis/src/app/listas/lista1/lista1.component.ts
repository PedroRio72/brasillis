import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista1.component.html',
  styleUrl: './lista1.component.css',
})
export class Lista1Component {
  @Input() lista: string[] = [];
}
