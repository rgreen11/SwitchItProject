import React from 'react';
import AuthContext from '../contexts/auth';
import {Route,  Switch} from "react-router-dom";
import Navbar from '../components/navbar';
import Closet from './closet';
import Opening from './opening';
import AddItem from './addItem';
// import Filter from './components/filterslider';
// import Calendar from './containers/Calendar';
import MixNMatch from './mixNmatch';
import BigCalender from './BigCalender';
// /*Practice CONSUMER */import Practice from './containers/BigCalender';
import Signup from "./signup";
import Login from "./login";
import Error404 from "../components/error404";
import Logout from "./logout";


class RoutesContainer extends React.Component {

  static contextType = AuthContext;

  render() {
    console.log('App Context', this.context)
    const loggedOutRoutes = <Switch>
      <Route path="/opening" exact component={Opening} /> 
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route component={Error404} />
    </Switch>;

    const loggedInRoutes = <Switch>
      <Route path="/" exact component={Closet} /> 
      <Route path="/additem" exact component={AddItem} /> 
      <Route path="/mix-N-match" exact component={MixNMatch} />
      <Route path="/calendar" exact strict component={BigCalender} /> 
      <Route path="/logout" exact component={Logout} />
      {/* <Route path="/opening" exact strict component={() => null} /> 
      <Route path="/signup" exact strict component={() => null} /> 
      <Route path="/login" exact strict component={() => null} />  */}
    </Switch>

    return (
      <>
        <Route path="/" component={Navbar} />
        { this.context.user ? loggedInRoutes : loggedOutRoutes }
      </>
    )
  }
}

export default RoutesContainer;