import React, { Component } from 'react';
import './styling/baseLayout.css';
import Register from './Register';
import DisplayData from './DisplayData';

export default class BaseLayout extends Component {
  render(){
  return (
    <div className="baseLayoutBody">
      <Register />
      <DisplayData />
    </div>
  )};
}
