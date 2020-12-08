import React, { useState } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { login } from '../../store/actions/currentUser'

import List from '../../components/ListUser/index'
import InsertUser from '../../components/insertUser/index'
import RemoveUser from '../../components/RemoveUser/index'
import UpdateUser from '../../components/UpdateUser/index'

function Home(props) {

  const [option, setOption] = useState(0)

  function renderOption() {
    if (option === 1) return <List token={props.currentUser.token}/>
    else if (option === 2) return <InsertUser />
    else if (option === 3) return <UpdateUser token={props.currentUser.token}/>
    else if (option === 4) return <RemoveUser token={props.currentUser.token}/>
  }


  return (
    <div className="Home">
      <div className="buttons">
        <button onClick={() => { setOption(1) }}>List users</button>
        <button onClick={() => { setOption(2) }}>Insert user</button>
        <button onClick={() => { setOption(3) }}>Update user</button>
        <button onClick={() => { setOption(4) }}>Remove user</button>
      </div>

      {renderOption()}
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: {
      email: user.email,
      name: user.name,
      token: user.token
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


