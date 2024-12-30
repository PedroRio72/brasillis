import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './clientes1.component.html',
  styleUrl: './clientes1.component.css',
})
export class Clientes1Component {
  // Formulário

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(120),
    ]),
    cidade: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  blnCadastrar: boolean = true;

  clientes: Pessoa[] = [];
  refClie: number = -1;

  incluir() {
    this.clientes.push(this.formulario.value as Pessoa); // Inclui no array
    this.formulario.reset(); // Limpa os inputs
    console.table(this.clientes);
  }
  selCliente0(pCliente: Pessoa) {
    this.formulario.value.nome = pCliente.nome;
    this.formulario.value.idade = pCliente.idade;
    this.formulario.value.cidade = pCliente.cidade;
  }
  selecionar(pRefClie: number) {
    this.refClie = pRefClie;
    this.formulario.setValue({
      nome: this.clientes[pRefClie].nome,
      idade: this.clientes[pRefClie].idade,
      cidade: this.clientes[pRefClie].cidade,
    });
    this.blnCadastrar = false;
  }
  alterar() {
    this.clientes[this.refClie] = this.formulario.value as Pessoa;
    this.formulario.reset();
    this.blnCadastrar = true;
  }
  remover() {
    this.clientes.splice(this.refClie, 1); //Remove a partir do refClie, 1 registro.
    this.formulario.reset();
    this.blnCadastrar = true;
  }
  cancelar() {
    this.formulario.reset();
    this.blnCadastrar = true;
  }
}
