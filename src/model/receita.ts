import { Ingrediente } from "./ingredientes";

export class Receita {


    constructor(public nome: string, public descricao: string, 
                public dificuldade: string, public ingredientes: Ingrediente[]) {}

}
