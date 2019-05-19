import React from 'react';
import { HashRouter, Route,  Switch} from "react-router-dom";


//pages

import Closet from './containers/Closet';
import Opening from './containers/Opening';
import AddItem from './containers/AddItem';
import MixNMatch from './containers/MixNMatch';
import Calendar from './containers/Calendar';

//components
import {StateProvider} from './context';
import Navbar from './components/Navbar';


class App extends React.Component {

  render(){
    return (
 
      
      <StateProvider>
        <HashRouter>
        <Route path='/' component={Navbar} />
          <Switch>
            {/* <Route path="/" exact strict component={Closet} />
            <Route path="/Opening" exact strict component={Opening} />
            <Route path="/Additem" exact strict component={AddItem} />
            <Route path="/Mix-N-Match" exact strict component={MixNMatch} />
            <Route path="/Calendar" exact strict component={Calendar} /> */}
          </Switch>
      </HashRouter>
      </StateProvider>
      
      );
    }
  }
      
    
    
    export default App;
    

