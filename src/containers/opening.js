import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/image/SwitchIt-icon-logo-tee-02.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import '../styles/opening.css';

const Opening = (props) => {
  return (<>
    <div className="container">
        <div className="row align-items-center ">
          <div className="col">
        <img src={Logo} alt="Switch It Logo"/>
          </div>
          <div className="col">
        <img src="https://media.giphy.com/media/RDfuHGl95aq64/giphy.gif" alt="Clueless Movie Clip" />
          </div>
      </div>
    </div>
  </>
  )
}

export default Opening;