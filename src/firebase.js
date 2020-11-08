import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAbEUGYyFhWQKy_Xw2LeuEpaPC8c0_awqY",
    authDomain: "fb-msg-clone-dcef4.firebaseapp.com",
    databaseURL: "https://fb-msg-clone-dcef4.firebaseio.com",
    projectId: "fb-msg-clone-dcef4",
    storageBucket: "fb-msg-clone-dcef4.appspot.com",
    messagingSenderId: "412721417786",
    appId: "1:412721417786:web:57b52c50b6c230f1d3af03",
    measurementId: "G-MN32CW7M7P"

});


const db = firebaseApp.firestore();

export default db;