import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/image/SwitchIt-icon-logo-tee-02.jpg';
import '../styles/opening.css';



const Opening = (props) => {
  return (
    <>
    
    <div className='tiledBackground'>
   
    <div>
      <div>
        <img src={Logo} alt="logo" className="rounded mx-auto d-block"
        style={{width: '500px', padding: '20px'}} /> 
      </div>

      <div style={{textAlign:'center', fontStyle: 'italic'}}>
        <h2>switch it info here</h2>
      </div>
      <div className="btn-wrapper" style={{display:'flex', justifyContent: 'center'}}>
      <Link to="/signup" className="left" style={{paddingRight: '10px', paddingTop: '20px'}}>
        <button className="btn btn-primary btn-lg btn-danger"  >
          Sign Up
        </button>
      </Link>
      <Link to="/login" className="right" style={{paddingLeft: '10px', paddingTop: '20px'}}>
        <button className="btn btn-primary btn-lg">
          Login
        </button>
      </Link>
    </div>
   
  

    </div>
    </div>
 
    </>
  )
}

export default Opening;