import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersList extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.fetchUsers()
    }
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>)
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users App`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
}
