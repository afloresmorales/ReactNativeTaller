import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCHgqf6WJxWpE1whIn5JcQVn0UtCBf-qiM',
  authDomain: 'restaurantsworkshop.firebaseapp.com',
  databaseURL: 'https://restaurantsworkshop.firebaseio.com',
  projectId: 'restaurantsworkshop',
  storageBucket: 'restaurantsworkshop.appspot.com',
  messagingSenderId: '671617755386',
  appId: '1:671617755386:web:3697e853cd0d7cdabb4143',
  measurementId: 'G-DMKRWGBZ0Y',
};
//initialize firebase
let app = firebase.initializeApp(config);
export const firebaseConfig = app.database();
