import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app3';

  constructor(){ }

  ngOnInit(): void {

    //https://projeto-instagram-clone-26411-default-rtdb.firebaseio.com/

    const config = {
      apiKey: "AIzaSyAfevx9w4RkDOUMCXTzF7aKGI9oP6UbrQU",
      authDomain: "projeto-instagram-clone-26411.firebaseapp.com",
      databaseURL: "https://projeto-instagram-clone-26411-default-rtdb.firebaseio.com",
      projectId: "projeto-instagram-clone-26411",
      storageBucket: "projeto-instagram-clone-26411.appspot.com",
      messagingSenderId: "916097100939",
      appId: "1:916097100939:web:cf45d0f18b75ffb83d788e"
    };

    firebase.initializeApp(config)






  }







}
