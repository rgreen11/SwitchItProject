import React from 'react';
import firebase from '../firebase';
import Opening from '../containers/opening';

export default class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
  }

  render() {
    return <h1>You're logged out. Come back soon!</h1>
  }
}