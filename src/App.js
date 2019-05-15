import React from 'react';
import { HashRouter, Route,  Switch} from "react-router-dom";


//pages

import Closet from './containers/closet';
import Opening from './containers/opening';
import addItem from './containers/addItem';
import mixNmatch from './containers/mixNmatch';
import Calendar from './containers/calendar';
import Favorites from './containers/favorites';

//components
import {StateProvider} from './context';
import Navbar from './components/navbar';


class App extends React.Component {

  render(){
    return (
      <div>Hello App.js Page</div>
      /*
      <StateProvider>
        <HashRouter>
        <Route path='/' component={Navbar} />
          <Switch>
            <Route path="/" exact strict component={Closet} />
            <Route path="/opening" exact strict component={Opening} />
            <Route path="/additem" exact strict component={addItem} />
            <Route path="/mix-N-match" exact strict component={mixNmatch} />
            <Route path="/calendar" exact strict component={Calendar} />
            <Route path="/favorites" exact strict component={Favorites} />
          </Switch>
      </HashRouter>
      </StateProvider>
      */
      );
    }
  }
      
    
    
    export default App;
    

