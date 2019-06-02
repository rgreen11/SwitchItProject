import React from 'react';
import firebase from '../firebase';
import AuthContext from '../contexts/auth';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

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
      console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidUpdate = async()=> {
    if(this.state.firebase_token){
      const {firstname,lastname, email, username, password, firebase_token,avatar_url,} = this.state;
      const url = `http://localhost:3001/user/`
      const post = await Axios({
        method:'post',
        url:url,
        data:{
              firstname:firstname,
              lastname:lastname,
              email:email,
              firebase_token:firebase_token,
              avatar_url:avatar_url,
              username:username,
              password:password,
          }})
          console.log(post);
    
    }    
        
  }
  

       
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const {uid,photoUrl} = response.user;
      this.setState({firebase_token:uid,avatar_url:photoUrl});
    }
    
  
  render(){
    const { firstname, lastname, email, username, password, error } = this.state;
    const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>
    const displayForm = <>
      <h1>Sign Up</h1>
      {displayError}
      <form>
        <div className="form-group">
          <label htmlFor="exampleName">First name</label>
          <input type="text" className="form-control" placeholder="first name" value={firstname} name="firstname" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleName">Last name</label>
          <input type="text" className="form-control" placeholder="first name" value={lastname} name="lastname" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleName">Username</label>
          <input type="text" className="form-control" placeholder="username" value={username} name="username" onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
      </form>
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



