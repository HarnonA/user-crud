import React from 'react'
import './index.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../../store/actions/currentUser'
import { Link, useHistory } from 'react-router-dom'

function SignIn(props) {

  const history = useHistory();

  function handleSignin(email, password) {
    axios.post('http://localhost:3001/signin',
      { email, password },
    )
      .then(res => {
        if (res.data !== "Email or password incorrect.") {
          props.onLogin({ ...res.data })
          history.push("/home");
        }
      }).catch(err => console.log(err))
  }



  return (
    <div className="SignIn">
      <form>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>E-mail</label>
          <input id="email" type="email" className="form-control is-invalid" placeholder="Enter email" />
          <div className="invalid-feedback">
            Provide a valid e-mail.
          </div>
        </div>


        <div className="form-group">
          <label>Password</label>
          <input id="password" type="password" className="form-control" placeholder="Enter password" />
        </div>
      </form>
      <button type="submit"
        onClick={() => { handleSignin(document.getElementById("email").value, document.getElementById("password").value) }}
        className="btn btn-success btn-block"
      >

        Submit
        </button>

      <p className="forgot-password">
        Forgot <Link >password?</Link>
      </p>

      <p className="forgot-password">
        Don't have a account? <Link to={'/signup'} >Sign up</Link> here.
        </p>



    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
    token: user.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


