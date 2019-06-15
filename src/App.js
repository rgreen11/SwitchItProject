import React, { Component } from "react";
import firebase from './firebase';
import axios from 'axios';

import RoutesContainer from './containers/routes';

//components
import AuthContext from "./contexts/auth";

class App extends Component {
  state = {
    user: { user: null, user_id: null }
  };
 
  componentDidMount = async () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const obj = {};
        obj.user = user;
        obj.user_id = user.uid;
        localStorage.setItem('user_id', user.uid)
        
        this.setState({ user: obj });
      } else {
        this.setState({ user: { user: null, user_id: false } });
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <>
      <AuthContext.Provider value={this.state.user}>
        <RoutesContainer />
      </AuthContext.Provider>
      </>
      );
    }
  }
      
export default App;
    

