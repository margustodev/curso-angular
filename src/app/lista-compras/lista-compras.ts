  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { NgClass } from '@angular/common';
  import { ItemLista } from './itemlista';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, NgClass],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})
export class ListaCompras {
  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    this.item = '';

  }

  riscarItem (itemLista:ItemLista) {
    itemLista.comprado = !itemLista.comprado;

  }

  limparLista () {
    this.lista = [];
  }
}
