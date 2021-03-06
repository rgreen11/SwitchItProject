import React from 'react';
import AuthContext from '../contexts/auth';
import { Route, Switch } from "react-router-dom";
import Navbar from '../components/navbar';
import Closet from './closet';
import Opening from './opening';
import AddItem from './addItem';
// import Filter from './components/filterslider';
// import Calendar from './containers/Calendar';
import MixNMatch from './mixNmatch';
import BigCalendar from './BigCalendar';
import Signup from "./signup";
import Login from "./login";
import Error404 from "../components/error404";
import Logout from "./logout";
import Ootd from '../containers/ootd';


class RoutesContainer extends React.Component {

  static contextType = AuthContext;

  componentDidMount() {

  }

  render() {
    const loggedOutRoutes = <Switch>
      <Route path="/" exact component={Opening} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact strict component={Logout} />
    </Switch>;

    const loggedInRoutes = <Switch>
      <Route path="/closet" exact strict component={Closet} />
      <Route path="/additem" exact strict component={AddItem} />
      <Route path="/mix-N-match" exact strict component={MixNMatch} />
      <Route path="/ootd" exact strict component={Ootd} />
      <Route path="/calendar" exact strict component={BigCalendar} />

      <Route path="/opening" exact strict component={() => null} />
      <Route path="/signup" exact strict component={() => null} />
      <Route path="/login" exact strict component={() => null} />
      <Route exact component={Error404} />
    </Switch>

    return (
      <>
        {this.context.user ? <Route path="/" component={Navbar} /> : <div></div>}
        {this.context.user ? loggedInRoutes : loggedOutRoutes}
      </>
    )
  }
}

export default RoutesContainer;