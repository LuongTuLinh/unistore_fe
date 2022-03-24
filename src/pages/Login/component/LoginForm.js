import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './LoginForm.css'

LoginForm.prototype = {
  onLogin: PropTypes.func,
}
LoginForm.defaultProps = {
  onLogin: null,
}


function LoginForm({ onLogin, error, setError }) {
  const [details, setDetails] = useState({ username: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    onLogin(details);
  }

  return (
      <>
        <hr className="offset-lg hidden-xs" />
        <hr className="offset-md"></hr>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
              <h1 className="align-center">Returning Customer</h1>
              <br/>

              <form className="signin" onSubmit={submitHandler}>
                  <input type="text" name="username" placeholder="Username" required={true} className="form-control" 
                  onChange={e => {
                    setDetails({...details, username: e.target.value});
                    setError("");
                  }}
                  value={details.username} />
                  <br/>
                  <input type="password" name="password" placeholder="Password" required={true} className="form-control" 
                  onChange={e => {
                    setDetails({...details, password: e.target.value})
                    setError("");
                  }} 
                  value={details.password} />
                  <br/>
                  <div className="error"> { error } </div>
                  <button type="submit" className="btn btn-primary">Sign In</button>
                  <a href="#forgin-password" data-action="Forgot-Password" className="xs-margin">Password recovery </a>
                  <br/><br/>

                  <p>
                  If you already have an account with us, please login.
                  </p>
                  <hr className="offset-xs" />
                  {/* <a href="#facebook" className="btn btn-facebook"> <i className="ion-social-facebook"></i> Login with Facebook </a> */}
                  <hr className="offset-sm" />

                  <p>
                  Don't have an account? Create one now! <a href="../signup"> Registration </a>
                  </p>

              </form>
            </div>
          </div>
        </div>
        <br /><br />
        <br className="hidden-xs" />
        <br className="hidden-xs"></br>
      </>
  )
}

export default LoginForm
