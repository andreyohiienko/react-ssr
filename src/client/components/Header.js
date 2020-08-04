import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  console.log('auth', auth)
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  )

  return (
    <div>
      <Link to="/">Reat SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
