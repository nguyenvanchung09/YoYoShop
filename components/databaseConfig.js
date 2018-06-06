import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB8oJ-C43aSdK-nent5f0AiK68UYCx_B_g",
    authDomain: "yoyoshop-b03c3.firebaseapp.com",
    databaseURL: "https://yoyoshop-b03c3.firebaseio.com",
    projectId: "yoyoshop-b03c3",
    storageBucket: "yoyoshop-b03c3.appspot.com",
    messagingSenderId: "231276037622"
};

export const firebaseApp = firebase.initializeApp(config);