import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { connect } from 'react-redux'


function List({token}) {

    const [lists, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/user/list',
            { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDczOTU1MzEsImV4cCI6MTYwNzQ4MTkzMSwic3ViIjoiW29iamVjdCBVbmRlZmluZWRdIn0.2NeGYD0X-uk-AHRCkMQ_woFszvY2S7hnENbx32R40N8` } }
        )
            .then(res => {
                setList(res.data)
            }).catch(err => console.log(err))
    }, [])



    return (
        <div className="List">
            {lists.map((e, i) =>
                <div className="element" key={i}>
                    <p><b>{e.name}</b></p>
                    <p>{e.id}</p>
                    <p>{e.email}</p>
                </div>
            )}
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



export default connect(mapStateToProps, null)(List);



