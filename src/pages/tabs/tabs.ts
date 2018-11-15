
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Welcome } from '../welcome/welcome';
import { DenunciarPage } from '../denunciar/denunciar';
import { ListarDenunciasPage } from '../listar-denuncias/listar-denuncias';
import { HomePage } from '../home/home';
// Serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DenunciarPage;
  tab3Root = ListarDenunciasPage;

  constructor( public navCtrl: NavController, private auth: AuthProvider) {
        // Usado para direcionar o usuário que não estiver logado para a página de login
        this.auth.user.subscribe(
          (auth) => {
            if (auth == null) {
              this.navCtrl.setRoot(Welcome);
            }
          });

  }
}
