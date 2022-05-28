import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;
  esconderCaixa = true;

  alterarNome(evento){
    console.log(evento.target.value)
    this.nome=evento.target.value
  }

  adicionar(nomeInput): void{
    this.esconderCaixa = false
    this.nome = nomeInput.value
    // console.log(nomeInput.value)
    // console.log("Adicionando...")
  }
}
