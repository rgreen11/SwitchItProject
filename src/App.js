import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import firebase from './firebase';

// ---- Contexts
import AuthContext from './contexts/auth';


// ---- Pages

import Picturepost from './containers/createpost';
import PicturesRender from './containers/testingpage';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  //api data retrieving for authentication portion
  //here we are assignin unsubscribe-->given a function
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log(user, this.state)
      
      if (user) {
        this.setState({ user: user.email }); //user shows user is logged in--->passed to auth context
      } 
      else {
        this.setState({ user: null })
      }
    })
  }

  //invoking it to take it off memory
  componentWillUnmount() {
    this.unsubscribe()
  }



  render() {
    return (
      <div>
        <HashRouter>
        <AuthContext.Provider value={this.state.user}>
      
            <div className='links-container' >
              <Route path='/createpost' component={Picturepost} />     
              <Route path='/showpics' component={PicturesRender} />          
              {/* <Route path='/pics' component={Showimages} />  */}
            </div>
          </AuthContext.Provider>
        </HashRouter>
      </div>
    );
  }
}

export default App;