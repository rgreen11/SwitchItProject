import 'firebase/auth';
import * as firebase from 'firebase';
import 'firebase/storage'
import ApiKey from './contexts/ApiKey';

const firebaseConfig = {
    apiKey: `${ApiKey}`,
    authDomain: "switchit-fff9e.firebaseapp.com",
    databaseURL: "https://switchit-fff9e.firebaseio.com",
    projectId: "switchit-fff9e",
    storageBucket: "switchit-fff9e.appspot.com",
    messagingSenderId: "1001966311787",
    appId: "1:1001966311787:web:7cfd418b5971ac81"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase;




