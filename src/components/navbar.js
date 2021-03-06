import React from 'react';
import Logo from '../components/image/SwitchIt-icon-logo-01.jpg';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import '../styles/Navbar.css';
import AuthContext from "../contexts/auth";
import Opening from '../containers/opening'

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {
        user => {
          console.log(user);
          if (user.user) {
            console.log('logged in')
            return (
              <>
            
                <nav className="navbar navbar-expand-lg navbar-light aqua-gradient">
                  <Link to="/">
                    <img src={Logo} className="img-thumbnail float-right" style={{ width: '75px' }} alt="" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <Link to="/Additem">
                          <a className="nav-link" href="#">Add Item <span className="sr-only">(current)</span></a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/mix-N-match">
                          <a className="nav-link" href="#">Mix-N-Match</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/ootd">
                          < a className="nav-link" href="#">Outfit of the Day</a>
                        </Link>
                      </li>
                   
                      <li className="nav-item textA float-right">
                        <Link to="/logout">
                          <a className="nav-link textA float-right" href="#">Log Out</a>
                        </Link>
                      </li>
                    </ul>

                  </div>
                </nav>
              </>

            )
          }
          else {
            console.log('logged out')
            return (
                <>
                  <nav className="navbar navbar-expand-lg navbar-light aqua-gradient">
                  <Link to="/opening">
                    <img src={Logo} className="img-thumbnail float-right" style={{ width: '75px' }} alt="" />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      
                      <li className="nav-item textA">
                        <Link to="/login">
                          <a className="nav-link" href="#">Login</a>
                        </Link>
                      </li>
                      <li className="nav-item textA">
                        <Link to="/signup">
                          < a className="nav-link" href="#">Sign Up</a>
                        </Link>
                      </li>
              
                    </ul>
                  </div>
                 
                  </nav>
              </>
            )
          };
        }
      }
    </AuthContext.Consumer>
  );
}

export default Navbar;
