import { Component, Input, OnDestroy, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Arsenal } from '../arsenal.model';
import { ArsenalService } from '../arsenal.service';
import { DataSource } from '@angular/cdk/table'
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-arsenal-tabela',
  templateUrl: './arsenal-tabela.component.html',
  styleUrls: ['./arsenal-tabela.component.css']
})


export class ArsenalTabelaComponent implements OnInit, OnDestroy {
  arsenal: Arsenal[] = []
  private arsenalSubscription: Subscription
  constructor(private arsenalService: ArsenalService, public dialog: MatDialog) { 
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
    this.arsenalService.removerArsenal(item.nome)
  }

  onAtualizarArsenal(item){
    this.arsenalService.atualizarArsenal(item.nome, item
      .quantidade)
  }

  openDialog(item:Arsenal): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {nome: item.nome, quantidade: item.quantidade},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.onAtualizarArsenal(result)
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Arsenal,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}