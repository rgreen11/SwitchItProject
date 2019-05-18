// import app from 'firebase/app';
import 'firebase/storage'
import 'firebase/auth';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDTG4o6zigXAe5_iXAdx-jwsi9Gfj4lPe0",
  authDomain: "switchitcapstone.firebaseapp.com",
  databaseURL: "https://switchitcapstone.firebaseio.com",
  projectId: "switchitcapstone",
  storageBucket: "switchitcapstone.appspot.com",
  messagingSenderId: "534628776739",
}; 

 firebase.initializeApp(config);
 
 export default firebase
// export default app;