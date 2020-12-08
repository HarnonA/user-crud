import React, { useState } from 'react'
import './index.css'
import axios from 'axios'
import Form  from '../Form/index'


function UpdateUser({token}) {

    const [successMsg, setSuccessMsg] = useState("")

    function handleUpdate(id) {
        axios.post('http://localhost:3001/user/search',
            { id },
            { headers: { "Authorization": `Bearer ${token}` } }
        )
            .then(res => {
                setSuccessMsg(res.data)
            }).catch(err => console.log(err))

    }

    return (
        <div className="UpdateUser">
            <form>
                <div className="form-group">
                    <label>User ID</label>
                    <input id="id" type="text" className="form-control" placeholder="ID" />
                </div>
            </form>
            <button onClick={() => handleUpdate(document.getElementById("id").value)}
                type="submit" className="btn btn-primary btn-block">Find</button>
            {successMsg && <Form header={"Update User"} userData={successMsg}/>}
        </div>
    );
}



export default UpdateUser;


