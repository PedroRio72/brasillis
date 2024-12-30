import { Component } from '@angular/core';

@Component({
    selector: 'app-controlflow',
    standalone: true,

    templateUrl: './controlflow.component.html',
    styleUrl: './controlflow.component.css',
})
export class ControlflowComponent {
    media: number = 6;
    nomes: string[] = ['Lucas', 'Amanda', 'Rafael', 'Juliana', 'Carlos'];
    linguagem: string = 'CSS';
}
