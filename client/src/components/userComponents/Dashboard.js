import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    let userid= localStorage.getItem('userid')
    this.state = {
      userid: userid
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.state.userid}!</h1>
      </div>
    )
  }
}
export default Dashboard;
