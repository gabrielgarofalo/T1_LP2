import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Arsenal } from '../arsenal.model';
import { ArsenalService } from '../arsenal.service';
import { DataSource } from '@angular/cdk/table'
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-arsenal-tabela',
  templateUrl: './arsenal-tabela.component.html',
  styleUrls: ['./arsenal-tabela.component.css']
})


export class ArsenalTabelaComponent implements OnInit, OnDestroy {
  arsenal: Arsenal[] = []
  private arsenalSubscription: Subscription
  constructor(private arsenalService: ArsenalService) { 
  }
  dataSource;
  displayedColumns = [];
  isEditable = false;

  columnNames = [{
    id: 'tipo',
    value: 'Tipo',

  }, {
    id: 'nome',
    value: 'Nome',
  },
    {
      id: 'quantidade',
      value: 'Quantidade',
    },
  {
    id: 'acoes',
    value: 'Ações'
  }];

  ngOnInit(): void {
    this.arsenalService.getArsenal();
    this.arsenalSubscription = this.arsenalService
    .getListaArsenalAtualizada()
    .subscribe((arsenal: Arsenal[]) => {
    this.arsenal = arsenal;
    this.createTable()
    });
    this.displayedColumns = this.columnNames.map(x => x.id);
    }

  ngOnDestroy(): void {
    this.arsenalSubscription.unsubscribe()
  }

  createTable() {
    let linhas: Arsenal[] = this.arsenal;
    this.dataSource = new MatTableDataSource(linhas);
  }

  onRemoverArsenal(item){
    console.log(item.nome)
    console.log("lista")
    const lista_atual = this.arsenalService.getListaForDelete()
    console.log(lista_atual)
    var nova_lista = lista_atual.filter(i => i.nome != item.nome);
    console.log(nova_lista)
    this.arsenalService.removerArsenal(nova_lista)
  }

  liberarEdicao(e, i){
    this.isEditable = true;
    console.log(this.isEditable)
    console.log(i)
    console.log(e)
  }

  cancelarEdicao(e, i){
    this.isEditable = false;
    console.log(i)
    console.log(e)
  }
}


