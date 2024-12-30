import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactform.component.html',
  styleUrl: './reactform.component.css',
})
export class ReactformComponent {
  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl(''),
  });
}
