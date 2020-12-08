import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

function Form({ header, text, userData }) {

  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  useEffect(() => {
    if (userData) {
      document.getElementById("email").value = userData.email
      document.getElementById("name").value = userData.name
    }
  }, [userData])



  function handleInsert() {
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    const repeatPassword = document.getElementById("repeatPassword").value
    let id = null
    if (userData && userData.id) { id = userData.id }

    let msg = ""
    repeatPassword.length === 0 && (msg = "Repeat password has problem")
    password.length === 0 && (msg = "Password has problem")
    email.length === 0 && (msg = "Email has problem")
    name.length === 0 && (msg = "Name has problem")
    setErrorMsg(msg)


    axios.post('http://localhost:3001/user/insert',
      { email, name, password, repeatPassword, id }
    )
      .then(res => {
        console.log(res.data)
        res.status === 200 && setSuccessMsg(text)
        document.getElementById("email").value = ""
        document.getElementById("name").value = ""
        document.getElementById("password").value = ""
        document.getElementById("repeatPassword").value = ""

      }).catch(err => console.log(err))

  }

  return (
    <div className="Form">
      <h3>{header}</h3>
      <form>
        <p className="error">{errorMsg}</p>
        <p className="success">{successMsg}</p>
        <div className="form-group">
          <label>Full name</label>
          <input id="name" type="text" className="form-control" placeholder="Name" />
        </div>


        <div className="form-group">
          <label>Email</label>
          <input id="email" type="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input id="password" type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label>Repeat password</label>
          <input id="repeatPassword" type="password" className="form-control" placeholder="Enter password" />
        </div>
      </form>
      <button onClick={() => handleInsert()}
        type="submit" className="btn btn-primary btn-block">{header}</button>
    </div>
  );
}

export default Form;
