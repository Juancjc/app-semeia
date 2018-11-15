import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importações necessárias

// Importação do serviço de tarefas
import { DenunciasProvider } from '../../providers/denuncias/denuncias';

// Importação do modelo de tarefas
import { Denuncias} from '../../models/denuncias'

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de uma tarefa
import { TabsPage } from '../tabs/tabs';
import { ListarDenunciasPage } from '../listar-denuncias/listar-denuncias';

@IonicPage()
@Component({
  selector: 'page-denunciar',
  templateUrl: 'denunciar.html',
})
export class DenunciarPage {


  // Definição do atributo tarefa que será usado para o cadastro
  public denuncia = {} as Denuncias;

  // Adicionando o serviço de tarefa no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private denunciasProvider:DenunciasProvider) {
  }

  // Método que será usado para adicionar uma tarefa
  adicionarDenuncia(denuncia: Denuncias) {
      denuncia.app=true;
      this.denunciasProvider.adicionar(denuncia);
      this.navCtrl.setRoot(ListarDenunciasPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTarefaPage');
  }

}
