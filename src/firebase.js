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




