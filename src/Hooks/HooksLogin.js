import { useState } from 'react';
import firebase from '../firebase';



const HooksLogin = (initalState = '') => {

    const [value, setValue] = useState(initalState);

    const handleChange = (e) => {

        setValue(e.target.value);
    }

    return [value, handleChange]

}

export default HooksLogin;