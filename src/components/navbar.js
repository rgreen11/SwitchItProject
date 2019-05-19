import React from 'react';
import Logo from '../components/image/SwitchIt-icon-logo-01.jpg';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
        <>
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
            <img src={Logo} className="img-thumbnail float-right" style={{width:'100px'}} alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <Link to="/AddItem" 
                className="nav-link" href="#">Add Item<span className="sr-only">(current)</span>
                </Link>
                <li className="nav-item">
                  <a className="nav-link" href="#">Mix-N-Match</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Calendar</a>
                </li>
              </ul>

            </div>
          </nav>
          </div>

        </>
         
                );
            }
        }
        
        export default Navbar;
        
        
        
