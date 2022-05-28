import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arsenal-inserir',
  templateUrl: './arsenal-inserir.component.html',
  styleUrls: ['./arsenal-inserir.component.css']
})
export class ArsenalInserirComponent{

  tipo: string
  nome: string
  quantidade: number

  onInserirArsenal(){
    console.log("Inserindo no Arsenal...")
  }

}
