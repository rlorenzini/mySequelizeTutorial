import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './styling/baseLayout.css';
import Header from './Header';

class BaseLayout extends Component {
  render(){
  return (
    <div className="baseLayoutBody">
      <Header history={this.props.history}/>
      { this.props.children }
    </div>
  )};
}

export default withRouter(BaseLayout);
