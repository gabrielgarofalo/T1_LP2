import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onInserirArsenal(form: NgForm){
    if(form.invalid) return
    const item: Arsenal = {
      tipo: form.value.tipo,
      nome: form.value.nome,
      quantidade: form.value.quantidade
    }

    this.itemAdicionado.emit(item)
  }

}
