import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCJl7K0MxINdaEZ5482NH8rOB347LVbAV8",
    authDomain: "switchit-fff9e.firebaseapp.com",
    databaseURL: "https://switchit-fff9e.firebaseio.com",
    projectId: "switchit-fff9e",
    storageBucket: "switchit-fff9e.appspot.com",
    messagingSenderId: "1001966311787",
    appId: "1:1001966311787:web:7cfd418b5971ac81"
  };
  app.initializeApp(firebaseConfig);
export default app;




// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/6.0.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#reserved-urls -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>