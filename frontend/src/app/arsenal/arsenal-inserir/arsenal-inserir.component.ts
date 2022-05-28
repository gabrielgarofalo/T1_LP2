import { Component, EventEmitter, Output } from '@angular/core';
import { Arsenal } from '../arsenal.model';

@Component({
  selector: 'app-arsenal-inserir',
  templateUrl: './arsenal-inserir.component.html',
  styleUrls: ['./arsenal-inserir.component.css']
})
export class ArsenalInserirComponent{

  @Output()
  itemAdicionado = new EventEmitter <Arsenal>();

  tipo: string
  nome: string
  quantidade: number

  onInserirArsenal(){
    const item: Arsenal = {
      tipo: this.tipo,
      nome: this.nome,
      quantidade: this.quantidade
    }

    this.itemAdicionado.emit(item)
  }

}
