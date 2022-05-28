import { Arsenal } from "./arsenal.model";
import { Subject } from "rxjs";

export class ArsenalService{
    private arsenal: Arsenal[] = []
    private listaArsenalAtualizada = new Subject <Arsenal[]>();

    getArsenal(): Arsenal[]{
        return [... this.arsenal]
    }

    adicionarArsenal(tipo: string, nome: string, quantidade: number): void{
        const item: Arsenal = {
            tipo, nome, quantidade
        }
        this.arsenal.push(item)
        this.listaArsenalAtualizada.next([...this.arsenal])
    }

    getListaArsenalAtualizada(){
        return this.listaArsenalAtualizada.asObservable()
    }
}