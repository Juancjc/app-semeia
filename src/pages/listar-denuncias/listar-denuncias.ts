import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DenunciasProvider } from '../../providers/denuncias/denuncias';
import { Denuncias } from '../../models/denuncias';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-listar-denuncias',
  templateUrl: 'listar-denuncias.html',
})
export class ListarDenunciasPage {
  
  denuncias: Observable<Denuncias[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private denunciasProvider:DenunciasProvider) {
  }

  ionViewDidLoad() {
    this.denuncias = this.denunciasProvider.pegarDenuncias(true);
    
  }

}
