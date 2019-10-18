import React, { Component } from 'react';
import './styling/login.css';

export default class SubmitData extends Component {
  constructor(){
    super()
    this.state={
      username:'',
      password:'',
      firstName:'',
      lastName:'',
      email:'',
      message:''
    }
  }

  handleTextBoxChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmitData=()=>(
    fetch('http://localhost:8080/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.styingify({
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
      }) //end of body
    }) // end of fetch
  ) //end of handleSubmitData function

  render(){
    return(
      <div>
      <h1>Register</h1>
      <input name="username" onChange={this.handleTextBoxChange} placeholder="New Username"/>
      <input name="password" onChange={this.handleTextBoxChange} type="password" placeholder="New Password"/>
      <input name="firstName" onChange={this.handleTextBoxChange} placeholder="First Name"/>
      <input name="lastName" onChange={this.handleTextBoxChange} placeholder="Last Name"/>
      <input name="email" type='email' onChange={this.handleTextBoxChange} placeholder="Email"/>
      <button onClick={this.handleSubmitData}>Register</button>
      </div>
    );
  };
};
