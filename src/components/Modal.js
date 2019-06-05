import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import '../styles/Modal.css';


export default () =>{

    return (
        <>
            <div className='coverBackground'></div>
            <div>
                <h5>Enter a nickName</h5>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                <submit>
                    <Link to="/calendar"></Link>
                </submit>
            </div>
        </>
    )
}