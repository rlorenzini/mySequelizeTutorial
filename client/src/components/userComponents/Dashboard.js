import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    let userid = localStorage.getItem('userid')
    this.state = {
      userid: userid,
      newFirstName: '',
      newLastName: '',
      active: false,
      message: '',
      activeMessage: false
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  triggerSubmitUpdatedUserInformation = (e) => {
    fetch('http://localhost:8080/updateUserInformation', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + localStorage.getItem('jsonwebtoken')
      },
      body: JSON.stringify({
        userid: this.state.userid,
        firstName: this.state.newFirstName,
        lastName: this.state.newLastName,
      })
    }).then((response) => response.json())
    .then((json) => {
      console.log(json.message)
      this.setState({
        message: json.message,
        activeMessage: true,
      })
      this.props.onUpdate(
        json.firstName,
        json.lastName
      )
    })
  }

  triggerUpdateForm = (e) => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.user}!</h1>
        <button
          className="basicButton"
          onClick={this.triggerUpdateForm}>
          Update User Info
        </button>
        <span className={this.state.active ? null : "hidden"}>
          <div>
          First Name: {this.props.firstName}<br/>
          Last Name: {this.props.lastName}<br/>
          </div>
          <div className="updateUserInformationForm">
            <input
              className="updateUserInformationInput"
              name="newFirstName"
              placeholder="Update First Name"
              onChange={this.handleOnChange}>
            </input>
            <input
              className="updateUserInformationInput"
              name="newLastName"
              placeholder="Update Last Name"
              onChange={this.handleOnChange}>
            </input>
            <button className="basicButton"
              onClick={this.triggerSubmitUpdatedUserInformation}>
              Submit New Info
            </button>
            <div className={this.state.activeMessage ? null : "hidden"}>
              Yay! {this.state.message}
            </div>
          </div>
        </span>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (firstName, lastName) => dispatch({
      type: 'UPDATE', firstName, lastName
    })
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.username,
    firstName: state.firstName,
    lastName: state.lastName,
    userid: state.userid
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
