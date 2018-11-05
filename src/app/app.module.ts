import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
// login
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
//Autenticação
//import { AuthServiceProvider } from '../providers/auth-service/auth-service';
//Login


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,//AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}//,AuthServiceProvider
  ]
})
export class AppModule {}
