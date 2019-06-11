import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css';

export default class Signup extends React.Component {

  state = {
    email: '',
    username: '',
    password: '',
    error: '',
    firstname:'',
    lastname:'',
    firebase_token:null,
    avatar_url:null
  }

  handleChange = (e) => {
      console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }  

  
  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const {uid,photoUrl} = response.user;
      this.props.history.push('/')
      this.setState({firebase_token:uid,avatar_url:photoUrl});
    }
    
  
  render(){
    const { firstname, lastname, email, username, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
    const displayForm = <>
    <div className="container-fluid" style={{height:'100vh'}}>
        <div className="title">
          <h1>SIGN UP</h1>
        </div>
        <div className='buttons text-center mb-5'>
        <button className="loginBtn loginBtn--google">
        Login with Google
        </button>
        </div>
       
      {displayError}
      <form style={{maxWidth:'500px', margin:'0 auto'}}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="FIRST NAME" value={firstname} name="firstname" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="LAST NAME" value={lastname} name="lastname" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="USERNAME" value={username} name="username" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="ENTER EMAIL" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="PASSWORD" value={password} name="password" onChange={this.handleChange} />
        </div>
        <div className='buttons text-center mb-5'>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>CREATE CLOSET</button>
        </div>
        <div className="title text-center">
          <Link to="/login">
            Already have an account? LOGIN
          </Link>
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
    );
      }}