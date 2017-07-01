import { Ingrediente } from "../model/ingredientes";
import { Receita } from "../model/receita";

export class ReceitaService {

    private receitas: Receita[] = [];

    adicionaReceita(nome: string, descricao: string, 
                    dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas.push(new Receita(nome, descricao, dificuldade, ingredientes));

    }

    getReceitas() {
        return this.receitas.slice();
    }

    alteraReceita(index: number, nome: string, descricao: string, 
                    dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas[index]=new Receita(nome, descricao, dificuldade, ingredientes);
    }

    removeReceita(index: number) {
        this.receitas.splice(index, 1);
    }

}
