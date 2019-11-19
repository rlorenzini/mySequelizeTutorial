import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styling/baseLayout.css';
import Header from './Header';

class BaseLayout extends Component {
  render(){
  return (
    <div className="baseLayoutBody">
      <Header
      onLogout={this.props.onLogout}
      isAuthenticated={this.props.isAuthenticated}
      history={this.props.history}
      />
      { this.props.children }
    </div>
  )};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({type: "LOGOUT"})
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BaseLayout));
