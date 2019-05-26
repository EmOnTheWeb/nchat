import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initialiseFirebase(); 


    });
  }

  initialiseFirebase() {

    firebase.initializeApp({
      apiKey: "AIzaSyDzH3b0vtk00IMJkAHzrAb_Y81-4-YJiWg",
      authDomain: "nchat-7bd57.firebaseapp.com",
      databaseURL: "https://nchat-7bd57.firebaseio.com",
      projectId: "nchat-7bd57",
      storageBucket: "nchat-7bd57.appspot.com",
      messagingSenderId: "1023127763832",
      appId: "1:1023127763832:web:eb84d4c4d1746627"
    });
  }
}

