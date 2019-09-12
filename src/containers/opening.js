import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import Logo from '../components/image/SwitchIt-icon-logo-01.jpg';
import Main from '../components/image/SwitchIt-icon-logo-tee-02.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import '../styles/opening.css';


const Opening = (props) => {

  return (
    <>

      <div className="wrapper justify-content-md-center">
        <header className="page-header aqua-gradient">
          <nav>
            <img src={Logo} className="img-thumbnail float-right" style={{ width: '50px' }} alt="Login" />
            <Link to="/closet" className="cta-contact">Demo Login</Link>
            <a className="cta-contact" href="#/login">Login</a>
          </nav>
        </header>
        <main className="page-main justify-content-md-center">
          <div className="transbox justify-content-md-center text-center ">
            <div class="fade-in-o">
              <img src={Main} className="img-fluid" />
            </div>
            <p>
              Organize your closet virtually, get styled, & plan when to wear it without the mess
            </p>
            <a href="#/signup" className="text-white btn sunny-morning-gradient rounded-pill ">Sign Up Now!</a>
          </div>
        </main>
        <footer className="page-footer aqua-gradient">
          <small>© Copyright 2019.</small>
          <a className="fa fa-github cta-contact" href="https://github.com/rgreen11/SwitchItProject">Github</a>
        </footer>
      </div>

    </>

  )
}


export default Opening;