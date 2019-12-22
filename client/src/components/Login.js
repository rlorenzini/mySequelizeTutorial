import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthenticationHeader } from './utilities/authentication';
import './styling/register.css';

class Login extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:'',
    }
  }

  handleTextBoxChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmitData=()=>(
    fetch('http://localhost:8080/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      }) //end of body
    }).then(response =>
      response.json()).then(json => {
        if (json.status === 500) {
          alert(json.message)
        }

        else if (json.status === 200) {

          let token = json.token
          let username = json.username
          let userid = json.id
          let firstName = json.firstName
          let lastName = json.lastName
          // let email = json.email

          localStorage.setItem('userid', userid)
          localStorage.setItem('jsonwebtoken', token)

          this.props.onAuthenticated(
            token,
            username,
            userid,
            firstName,
            lastName
          ) //check mapDispatchToProps
          this.props.history.push('/dashboard')

          setAuthenticationHeader(token)
        }
      }).catch((error) => {
        console.log(error)
        this.props.history.push('/login')
      })
  ) //end of handleSubmitData function

  render(){
    return(
      <div className='registerForm'>
      <div className='inputWrapper'>
        <div></div>
        <span className='mainText'>Login</span>
        <label className='labelText'>Username</label>
        <input required
          className='registerInput'
          name="username"
          onChange={this.handleTextBoxChange}
          placeholder="New Username"
        />
        <label className='labelText'>Password</label>
        <input required
          className='registerInput'
          name="password"
          onChange={this.handleTextBoxChange}
          type="password"
          placeholder="New Password"
        />
        <div></div>
        <button className='registerButton'
          onClick={this.handleSubmitData}>Login
        </button>
      </div>
      </div>
    );
  };
};

//passing state.username to redux reducer.js
const mapStateToProps = (state) => {
  return {
    username: state.username,
    userid: state.userid
  }
};

//our onAuthenticated function is the ON_AUTH action from redux reducer.js
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: (token, username, userid, firstName, lastName) => dispatch({
      type: 'ON_AUTH', token, username, userid, firstName, lastName
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
