import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBE2RiVwQId94YqU5epVHsiBQ08WsYT3Gw",
    authDomain: "yoyoshop-b03c3.firebaseapp.com",
    databaseURL: "https://yoyoshop-b03c3.firebaseio.com",
    projectId: "yoyoshop-b03c3",
    storageBucket: "yoyoshop-b03c3.appspot.com",
    messagingSenderId: "231276037622"
};

export const firebaseApp = firebase.initializeApp(config);