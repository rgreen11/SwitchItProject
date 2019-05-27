import React, { Component } from "react";
import { HashRouter, Route,  Switch} from "react-router-dom";
import firebase from './firebase';
import axios from 'axios';


//pages

// import Closet from './containers/closet';
// import Opening from './containers/opening';
import AddItem from './containers/addItem';
// import MixNMatch from './containers/mixNmatch';
// import Calendar from './containers/calendar';
import Signup from "./containers/signup";
import Login from "./containers/login";
import Error404 from "./components/error404";
import Logout from "./containers/logout";


//components
import AuthContext from "./contexts/auth";
import Navbar from './components/navbar';



class App extends Component {
  state = {
    user: { user: null, user_id: null }
  };
  componentDidUpdate = async () => {
    if (this.state.user.user_id === null && this.state.user.user) {
      const url = `http://localhost:3001/user/username/${
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
        <HashRouter>
       <Route path='/' component={Navbar} />
          <Switch>
            {/* {/* <Route path="/" exact strict component={Closet} /> */}
            {/* <Route path="/opening" exact strict component={Opening} /> */}
            <Route path="/additem" exact strict component={AddItem} /> */}
            {/* <Route path="/mix-N-match" exact strict component={MixNMatch} />
            <Route path="/calendar" exact strict component={Calendar} /> */}
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route component={Error404} />
          </Switch>
      </HashRouter>
      </AuthContext.Provider>
      </>
      );
    }
  }
      
    
    
    export default App;
    

