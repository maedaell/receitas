import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Receita } from "../../model/receita";
import { EditaReceitaPage } from "../edita-receita/edita-receita";
import { ListaComprasService } from "../../services/lista-compras.service";
import { ReceitaService } from "../../services/receitas.service";

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html'
})
export class ReceitaPage implements OnInit {
    
  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitaService,
              private alertCtrl: AlertController ) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
    let alert = this.alertCtrl.create({
      title: 'Apagar???',
      message: 'Voce quer apagar esta receita?',
      buttons: [
        {
          text: 'Nao',
          role: 'cancel',
          handler: () => {
            console.log('Selecionou nao apagar');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Selecionou apagar');
            this.receitasService.removeReceita(this.index);
            this.navCtrl.popToRoot();
          }
        }
      ]
    });

    alert.present();
  }

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes);

    let alert = this.alertCtrl.create({
      title: 'Ingredientes adicionados',
      message: 'Os ingredientes foram adicionados a lista de compras',
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.present();
  }


}
