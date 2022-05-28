import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-arsenal-inserir',
  templateUrl: './arsenal-inserir.component.html',
  styleUrls: ['./arsenal-inserir.component.css']
})
export class ArsenalInserirComponent{

  @Output()
  itemAdicionado = new EventEmitter();

  tipo: string
  nome: string
  quantidade: number

  onInserirArsenal(){
    const item = {
      tipo: this.tipo,
      nome: this.nome,
      quantidade: this.quantidade
    }

    this.itemAdicionado.emit(item)
  }

}
