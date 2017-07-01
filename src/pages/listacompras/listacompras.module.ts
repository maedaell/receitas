import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListacomprasPage } from './listacompras';

@NgModule({
  declarations: [
    ListacomprasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListacomprasPage),
  ],
  exports: [
    ListacomprasPage
  ]
})
export class ListacomprasPageModule {}
