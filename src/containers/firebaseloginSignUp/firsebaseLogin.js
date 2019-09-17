import firebase from '../../firebase';



export default (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((response) => {
            return response;
        })
        .catch(err => {
            const { message } = err;
            return message;
        })
}