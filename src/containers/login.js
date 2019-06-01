import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';

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
      </form>
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
}