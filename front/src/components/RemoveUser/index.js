import React, { useState } from 'react'
import './index.css'
import axios from 'axios'


function RemoveUser({token}) {

  const [successMsg, setSuccessMsg] = useState("")

  function handleDelete(id) {
    axios.post('http://localhost:3001/user/delete',
      { id },
      { headers: { "Authorization": `Bearer ${token}` } }
    )
      .then(res => {
        setSuccessMsg("User deleted")
      }).catch(err => console.log(err))

  }

  return (
    <div className="RemoveUser">
      <form>
        <div className="form-group">
          <label>User ID</label>
          <input id="id" type="text" className="form-control" placeholder="ID" />
        </div>
      </form>
      <button onClick={() => handleDelete(document.getElementById("id").value)}
        type="submit" className="btn btn-primary btn-block">Remove</button>
        <p className="success">{successMsg}</p>
    </div>
  );
}



export default RemoveUser;


