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
  componentDidUpdate = async () => {
    if (this.state.user.user_id === null && this.state.user.user) {
      const url = `http://localhost:7999/user/username/${
        this.state.user.user.username
      }`;
      const { data } = await axios.get(url);
      console.log(data);
      const obj = {};
      obj.user = this.state.user.user;
      obj.user_id = data.data.id;
      this.setState({ user: obj }, () => {
        console.log(this.state);
      });
    }
  };
  componentDidMount = async () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const obj = {};
        obj.user = user;
        obj.user_id = null;

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
    

