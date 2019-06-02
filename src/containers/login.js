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
<<<<<<< HEAD
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
=======
    <div className="container-fluid" style={{height:'calc(100vh - 96.53px)'}}> 
    <div className="title">
          <h1>Login</h1>
    </div>      
    {displayError}
      <form style={{maxWidth:'500px', margin:'0 auto'}}>        <div className="form-group">
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="ENTER EMAIL" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="PASSWORD" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className='buttons text-center mb-5'>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
        </div>
        <div className="title text-center">
          <Link to="/signup">
            Don't have an account? SIGNUP HERE.
          </Link>
        </div>
        </form>
        </div>
      </>;
>>>>>>> master

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
}