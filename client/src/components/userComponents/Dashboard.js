import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    let userid= localStorage.getItem('userid')
    this.state = {
      userid: userid,
      username: this.props.username
    }
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>Welcome, {this.state.username}!</h1>
      </div>
    )
  }
}
export default Dashboard;
