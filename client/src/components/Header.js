import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styling/header.css';

export default class Header extends Component {
  render(){
  return (
    <div>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/DisplayData'>DisplayData</NavLink>
    <NavLink to='/Register'>Register</NavLink>
    </div>
  )};
}
