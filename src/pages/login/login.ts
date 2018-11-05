import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, /*public authService:AuthServiceProvider */) {
  }

  login(){
    /* this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
      }
      else{ console.log("User already exists"); }
    }, (err) => {
      // Error log
    });*/

  }

  singup(){
    //Login page link
    this.navCtrl.push(SignupPage);
  }
}