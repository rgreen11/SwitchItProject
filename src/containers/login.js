import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect, Link } from 'react-router-dom';

export default class Login extends React.Component {

  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  render() {
    const { email, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
    const displayForm = <>
      {displayError}
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-heading">
            <h2 className="text-center">Login</h2>
          </div>
          <hr />
          <div className="modal-body">
            <form action="" role="form">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user"></span>
                  </span>
                  <input type="email" className="form-control" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} />

                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-lock"></span>
                  </span>
                  <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />

                </div>

              </div>

              <div class="form-group text-center">
                <button type="submit" classname="btn btn-success btn-lg" onClick={this.handleSubmit}>Login</button>

              </div>

            </form>
          </div>
        </div>
      </div>


    </>;

    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user.user) {
              return <Redirect to='/' />
            } else {
              return displayForm;
            }
          }
        }
      </AuthContext.Consumer>
    )
  }
};