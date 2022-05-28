import { Component, Input, OnInit } from '@angular/core';
import { Arsenal } from '../arsenal.model';

@Component({
  selector: 'app-arsenal-lista',
  templateUrl: './arsenal-lista.component.html',
  styleUrls: ['./arsenal-lista.component.css']
})
export class ArsenalListaComponent implements OnInit {

  @Input()
  arsenal: Arsenal[] = [
    //  {
    //   tipo: "Terrestre",
    //   nome: "Soldados",
    //   quantidade: 5000
    // },
    // {
    //   tipo: "Aquático",
    //   nome: "Subamrino",
    //   quantidade: 50
    // } 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
