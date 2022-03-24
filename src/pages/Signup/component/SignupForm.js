import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SignupForm.css'


SignupForm.prototype = {
  onSignup: PropTypes.func
}
SignupForm.defaultProps = {
  onSignup: null
}

export default function SignupForm({onSignup, error, setError}) {
  const [details, setDetails] = useState({name: "", username: "", phone: "", email: "", password: "", rePassword: "",});

  const submitHandler = e => {
    e.preventDefault();

    onSignup(details);
  }


  return (
    <>
      <hr className="offset-lg hidden-xs" />
      <hr className="offset-md" />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 md-padding">
            <h1 className="align-center">New Customer</h1>
            <br/>

            <form className="join" method="post" onSubmit={submitHandler}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <input type="text" name="name" placeholder="Name" required={true} className="form-control" 
                      onChange={e => {
                        setDetails({...details, name: e.target.value});
                        setError("");
                        }
                      }
                      value={details.name}
                    /><br/>
                  </div>
                  <div className="col-sm-12">
                    <input type="text" name="phone" placeholder="Phone" required={true} className="form-control" 
                      onChange={e => {
                        setDetails({...details, phone: e.target.value});
                        setError("");
                        }
                      }
                      value={details.phone}
                    /><br/>
                  </div>
                  <div className="col-sm-12">
                    <input type="email" name="email" placeholder="E-mail" required={true} className="form-control" 
                      onChange={e => {
                        setDetails({...details, email: e.target.value})
                        setError("")  
                        }
                      }
                      value={details.email}
                    /><br/>
                  </div>
                  <div className="col-sm-12">
                    <input type="text" name="username" placeholder="Username" required={true} className="form-control" 
                      onChange={e => {
                        setDetails({...details, username: e.target.value})
                        setError("")  
                        }
                      }
                      value={details.username}
                    /><br/>
                  </div>
                  <div className="col-sm-12">
                    <input type="password" name="password" placeholder="Password" required={true} className="form-control" 
                      onChange={e => {
                        setDetails({...details, password: e.target.value})
                        setError("");
                        }
                      }
                      value={details.password}
                    /><br/>
                  </div>
                  <div className="col-sm-12">
                    <input type="password" name="password-confirm" placeholder="Confirm Password" required={true} className="form-control" 
                      onChange={e => {
                        setDetails({...details, rePassword: e.target.value})
                        setError("");
                        }
                      }
                      value={details.rePassword}
                    /><br/>
                  </div>
                  <div className="col-sm-12 error">
                    {error}
                  </div>
                </div>
              </div>
              <br/>

              <button type="submit" className="btn btn-primary">Join free</button>
              <a href="#1" className="xs-margin">Terms</a>

              <br/><br/>
              <p>
                By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
              </p>
            </form>

            <br className="hidden-sm hidden-md hidden-lg"/>
          </div>
        </div>
      </div>
      <br/><br/>
      <hr className="hidden-xs"/>
      <br className="hidden-xs"/>
      <br className="hidden-xs"></br>
    </>
  )
}
