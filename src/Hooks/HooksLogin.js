import { useState } from 'react';
import firebase from '../firebase';



const HooksLogin = (initalState = '') => {

    const [value, setValue] = useState(initalState);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log('Returns: ', response);
                // this.props.history.push('/closet') // may break
            })
            .catch(err => {
                const { message } = err;
                setValue(message);
            })
    }

    return [value, handleChange, handleSubmit]

}

export default HooksLogin;