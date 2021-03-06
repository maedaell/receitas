import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ListaComprasService } from '../services/lista-compras.service'
import { ReceitaService } from '../services/receitas.service'

import { ListacomprasPage } from '../pages/listacompras/listacompras';
import { ReceitasPage } from '../pages/receitas/receitas';

import { EditaReceitaPage } from '../pages/edita-receita/edita-receita';
import { ReceitaPage } from '../pages/receita/receita';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListacomprasPage,
    EditaReceitaPage,
    ReceitaPage,
    ReceitasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ListacomprasPage,
    EditaReceitaPage,
    ReceitaPage,
    ReceitasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
