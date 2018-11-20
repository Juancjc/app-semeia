import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DenunciasProvider } from '../../providers/denuncias/denuncias';
import { Denuncias } from '../../models/denuncias';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-listar-denuncias',
  templateUrl: 'listar-denuncias.html',
})
export class ListarDenunciasPage {
  imgFoto: string;
  denuncias: Observable<Denuncias[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private denunciasProvider:DenunciasProvider) {
  }
  getFoto(image: string){
    return this.denunciasProvider.getFoto(image);  
}

  ionViewDidLoad() {
    this.denuncias = this.denunciasProvider.pegarDenuncias(true);
    
  }

}
