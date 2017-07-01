import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ListaComprasService } from "../../services/lista-compras.service";
import { Ingrediente } from "../../model/ingredientes";

/**
 * Generated class for the ListacomprasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-listacompras',
  templateUrl: 'listacompras.html',
})
export class ListacomprasPage {

  listaItens : Ingrediente[];

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListacomprasPage');
  }

  constructor(private listaComprasService:ListaComprasService) {}

  incluiItem(form: NgForm) {
    console.log(form);
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    form.reset();
    this.carregaItens();
  }

  ionViewWillEnter() {
    this.carregaItens();
  }

  carregaItens() {
    this.listaItens=this.listaComprasService.getItens();
  }

  removeItem(index: number) {
    this.listaComprasService.removeItem(index);
    this.carregaItens();
  }

}
