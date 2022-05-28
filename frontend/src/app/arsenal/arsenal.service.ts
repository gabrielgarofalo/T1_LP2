import { Arsenal } from "./arsenal.model";

export class ArsenalService{
    private arsenal: Arsenal[] = []

    getArsenal(): Arsenal[]{
        return [... this.arsenal]
    }

    adicionarArsenal(tipo: string, nome: string, quantidade: number): void{
        const item: Arsenal = {
            tipo, nome, quantidade
        }
        this.arsenal.push(item)
    }
}