import { Ingrediente } from "../model/ingredientes";

export class ListaComprasService {

    private itens: Ingrediente[] = [];
    size_main = 0;
    
    incluiItem(nome: string, quantidade: number) {
      this.itens.push(new Ingrediente(nome, quantidade));
      this.size_main++;
    }

    incluiItens(itens: Ingrediente[]) {
        // this.itens.push(...itens);
        // this.size_main++;
      let i: number;
      let j: number;
      let ingredientes_group: Ingrediente[] = [];
      let found: boolean;

      let size_group = 0;
      console.log (this.size_main);
      console.log (size_group);

      for (i = 0; i < this.size_main; i++) {
        found = false; 
        for (j = 0; j < size_group; j++) {
          if (this.itens[i].nome == ingredientes_group[j].nome) {
            found = true;
            ingredientes_group[j].quantidade += this.itens[i].quantidade;
            break;
          }
        }
        if (!found) {
          ingredientes_group.push(new Ingrediente(this.itens[i].nome, 1));
          size_group++;
        }
      }
      this.size_main = size_group;
      this.itens = ingredientes_group;

    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
        this.size_main--;
    }

}
