import React, { Component } from 'react';
import './styling/baseLayout.css';
import SubmitData from './SubmitData';
import DisplayData from './DisplayData';

export default class BaseLayout extends Component {
  render(){
  return (
    <div className="baseLayoutBody">
      <SubmitData />
      <DisplayData />
    </div>
  )};
}
