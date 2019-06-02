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
  <div className="container-fluid">
      <div className="title">
        <h1>Sign Up</h1>
      </div>
      <div className='buttons text-center mb-5'>
      <button className="loginBtn loginBtn--google">
      Login with Google
      </button>
      </div>
     
    {displayError}
    <form>
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
        <input type="password" className="form-control" placeholder="Password" value={password} name="PASSWORD" onChange={this.handleChange} />
      </div>
      <div className='buttons text-center mb-5'>
      <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>CREATE CLOSET</button>
      </div>
      <div className="title text-center">
        <Link to="/login">
          <a className="nav-link" href="#">Already have an account? LOGIN</a>
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