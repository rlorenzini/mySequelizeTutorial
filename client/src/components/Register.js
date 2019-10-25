import React, { Component } from 'react';
import './styling/register.css';

export default class Register extends Component {
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
      body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
      }) //end of body
    }).then(response =>
      response.json()).then(json => {
        if (json.status === 500) {
          alert(json.message)
        }
      })
  ) //end of handleSubmitData function

  render(){
    return(
      <div className='registerForm'>
      <div className='inputWrapper'>
        <div></div>
        <span className='mainText'>Register</span>
        <label className='labelText'>Username</label>
        <input className='registerInput' name="username" onChange={this.handleTextBoxChange} placeholder="New Username"/>
        <label className='labelText'>First Name</label>
        <input className='registerInput' name="firstName" onChange={this.handleTextBoxChange} placeholder="First Name"/>
        <label className='labelText'>Last Name</label>
        <input className='registerInput' name="lastName" onChange={this.handleTextBoxChange} placeholder="Last Name"/>
        <label className='labelText'>Email</label>
        <input className='registerInput' name="email" type='email' onChange={this.handleTextBoxChange} placeholder="Email"/>
        <label className='labelText'>Password</label>
        <input className='registerInput' name="password" onChange={this.handleTextBoxChange} type="password" placeholder="New Password"/>
        <div></div>
        <button className='registerButton' onClick={this.handleSubmitData}>Register</button>
      </div>
      </div>
    );
  };
};
