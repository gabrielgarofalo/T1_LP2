import { Arsenal } from "./arsenal.model";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NotificationService } from "../notificar-service";

@Injectable({ providedIn: 'root' })
export class ArsenalService{
    private arsenal: Arsenal[] = []
    private listaArsenalAtualizada = new Subject <Arsenal[]>();


    constructor (private httpClient: HttpClient, private notifyService : NotificationService){
    }


    getArsenal(): void {
        this.httpClient.get <{mensagem: string, arsenal:
       Arsenal[]}>('http://localhost:3000/api/arsenal').subscribe(
        (dados) => {
        this.arsenal = dados.arsenal;
        this.listaArsenalAtualizada.next([...this.arsenal]);
        }
        )
    }

    adicionarArsenal(tipo: string, nome: string, quantidade: number): void{
        const item: Arsenal = {
            tipo, nome, quantidade
        }
        this.httpClient.post<{mensagem: string, arsenal: []}> ('http://localhost:3000/api/arsenal',item).subscribe(
            (dados) => {
            this.notifyService.showSuccess(dados.mensagem)
            
            console.log(dados)
            console.log(dados.mensagem)
            console.log(dados.arsenal)
            this.arsenal = dados.arsenal
            this.listaArsenalAtualizada.next([...this.arsenal]);
         }
         )
        
    }

    removerArsenal(nome: string): void{
        console.log(nome)
        this.httpClient.delete<{mensagem: string, arsenal: []}> (`http://localhost:3000/api/arsenal/${nome}`).subscribe(
            (dados) => {
                this.arsenal = dados.arsenal
                this.listaArsenalAtualizada.next([...this.arsenal]);          
         }
         )
    }

    atualizarArsenal(nome: string, quantidade:number): void{
        this.httpClient.put<{mensagem: string, arsenal: []}> (`http://localhost:3000/api/arsenal/${nome}`, {quantidade}).subscribe(
            (dados) => {
                this.arsenal = dados.arsenal
                this.listaArsenalAtualizada.next([...this.arsenal]);          
         }
         )
    }

    getListaArsenalAtualizada(){
        return this.listaArsenalAtualizada.asObservable()
    }

}