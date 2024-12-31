import { Component } from '@angular/core';
import { Produto } from '../../modelo/Produto';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../servico/produto.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  blnCadastrar: boolean = true;

  produtos: Produto[] = [];

  //Construir o objeto de serviços
  constructor(private servico: ProdutoService) {}

  // Formulário
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    valor: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listar();
  }

  selecionar(pIndex: number) {
    this.formulario.setValue({
      id: this.produtos[pIndex].id,
      nome: this.produtos[pIndex].nome,
      valor: this.produtos[pIndex].valor,
    });
    this.blnCadastrar = false;
  }

  listar() {
    this.servico.listar().subscribe((ret) => {
      this.produtos = ret;
    });
  }

  incluir() {
    this.servico
      .cadastrar(this.formulario.value as Produto)
      .subscribe((ret) => {
        this.produtos.push(ret);
        this.formulario.reset();
      });
  }
  alterar() {
    this.servico.alterar(this.formulario.value as Produto).subscribe((ret) => {
      // Obtém o índice no array de acordo com o objeto presente no formulario
      let index = this.produtos.findIndex((obj) => {
        return this.formulario.value.id === obj.id;
      });
      this.produtos[index] = ret;
      this.formulario.reset();
      this.blnCadastrar = true;
    });
  }
  remover() {
    this.servico.remover(this.formulario.value as Produto).subscribe(() => {
      // Obtém o índice no array de acordo com o objeto presente no formulario
      let index = this.produtos.findIndex((obj) => {
        return this.formulario.value.id === obj.id;
      });
      this.produtos.splice(index, 1); //Remove a partir do refClie, 1 registro.
      this.formulario.reset();
      this.blnCadastrar = true;
    });
  }
  cancelar() {
    this.formulario.reset();
    this.blnCadastrar = true;
  }
}
