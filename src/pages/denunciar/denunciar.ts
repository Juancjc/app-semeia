import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
// Importações necessárias

// Importação do serviço de tarefas
import { DenunciasProvider } from '../../providers/denuncias/denuncias';

// Importação do modelo de tarefas
import { Denuncias} from '../../models/denuncias'

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de uma tarefa
import { TabsPage } from '../tabs/tabs';
import { ListarDenunciasPage } from '../listar-denuncias/listar-denuncias';

import { Camera, CameraOptions } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-denunciar',
  templateUrl: 'denunciar.html',
})
export class DenunciarPage {

  captureDataUrl: string;
  siteUrl: string;
  // Definição do atributo tarefa que será usado para o cadastro
  public denuncia = {} as Denuncias;

  // Adicionando o serviço de tarefa no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private denunciasProvider:DenunciasProvider, public alertCtrl: AlertController,
              private camera: Camera) {
                this.alertCtrl = alertCtrl;
  }


  capture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  upload() {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`imagesDenuncias/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      this.showSuccesfulUploadAlert();
    });

  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Denúncia Enviada!',
      subTitle: 'Aguarde andamento no app',
      buttons: ['FECHAR']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.navCtrl.setRoot(ListarDenunciasPage);
    this.captureDataUrl = "";
  }

  // Método que será usado para adicionar uma tarefa
  adicionarDenuncia(denuncia: Denuncias) {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);
    denuncia.id=filename;
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`imagesDenuncias/${denuncia.id}.jpg`);
  //emviar imagem para o firabase
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
           
      // testar colocar id da denuncia como filename, assim eh possivel criar a rota para pegar a imagem
      // imagesDenuncias/denuncia.id.jpg`
      
      var url = `imagesDenuncias/${denuncia.id}.jpg`;
      let imgUrl: string;
      denuncia.fotoDenunciaReferencia=url;
   //cria a url da imagem para download
      firebase.storage().ref().child(url).getDownloadURL().then(url => {
        console.log("log1: " + url);
        //imgUrl=""+url+"";
          //denuncia.id=id;
          denuncia.status='Aberta';
          denuncia.fotoDenuncia=url;
          denuncia.app=true;
          //this.denunciasProvider.getFoto( denuncia.fotoDenuncia);
         this.denunciasProvider.adicionar(denuncia);
         this.showSuccesfulUploadAlert(); 
        
      });  

      
    });
      

  }
  getFoto(image: string,denuncia: Denuncias,id: number){
    let imgUrl: string;
   

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTarefaPage');
  }

}
