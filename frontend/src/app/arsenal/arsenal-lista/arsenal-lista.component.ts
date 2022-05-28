import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arsenal-lista',
  templateUrl: './arsenal-lista.component.html',
  styleUrls: ['./arsenal-lista.component.css']
})
export class ArsenalListaComponent implements OnInit {

  arsenal = [
    {
      tipo: "Terrestre",
      nome: "Soldados",
      quantidade: 5000
    },
    {
      tipo: "Aquático",
      nome: "Subamrino",
      quantidade: 50
    } 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
