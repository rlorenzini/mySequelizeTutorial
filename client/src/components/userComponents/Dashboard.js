import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    let userid= localStorage.getItem('userid')
    this.state = {
      userid: userid,
    }
  }

  render() {
    console.log(this)

    return (
      <div>
        <h1>Welcome, {this.props.user}!</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.username
  }
}

export default connect(mapStateToProps)(Dashboard);
