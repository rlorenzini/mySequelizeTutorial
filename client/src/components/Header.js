import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styling/header.css';

export default class Header extends Component {

  //when logging out, remove jwt with user's info
  //run logout action from react redux
  //push the history (page) to the login component
  handleLogoutClick = () => {
    localStorage.removeItem('jsonwebtoken')
    localStorage.removeItem('userid')
    this.props.onLogout()
    console.log(this.props)
    // this.props.history.push('/')
  }

  render(){
  return (
    <div>

    {this.props.isAuthenticated ?
      <NavLink to='/dashboard'>Dashboard</NavLink>
      : <NavLink to='/'>Home</NavLink>}

    <NavLink to='/displayData'>DisplayData</NavLink>

    {this.props.isAuthenticated ? null :
      <NavLink to='/Register'>Register</NavLink>}

    {this.props.isAuthenticated ?
      <NavLink to="#" onClick={this.handleLogoutClick}>Logout</NavLink>
      : <NavLink to='/login'>Login</NavLink>}

    </div>
  )};
}
//breaking down our isAuthenticated NavLinks

//first, we check if the isAuthenticated prop is set
//if it is, meaning our user is logged in, go to the DASHBOARD
//if it is not set, take then to the HOME PAGE
//the NavLink dynamically changes based on props now
//the DASHBOARD is now protected, so you have to be logged in to access it

//since a user does not need to REGISTER, the registration navigation
//will only show when the browser has no active user

//as for the logout, the LOGOUT button only shows if the user is authenticated
//otherwise, there is a LOGIN button


//why do we not have to pass props to Redux in our Header component?
//our BaseLayout is handling the props for our Header with a parent/child relation
