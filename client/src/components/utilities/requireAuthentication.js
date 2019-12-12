import React,{ Component } from 'react';
import { connect } from 'react-redux';

//this is a High Order Component, meaning any component with requireAuth()
//will inherit from this component
//check index.js for components which inherit from this HOC

export default function requireAuth(ComposedComponent) {
  //our function is passing through an entire Component as a variable
  class Authenticate extends Component {
    //we are passing props.history, so we must set our constructor with props
    constructor(props) {
      super(props)

      //if authenticated is not true, push the page back to the index page
      if(this.props.isAuthenticated === false) {
        this.props.history.push('/')
      }
    };

    componentDidUpdate(nextProps) {
      if(this.props.isAuthenticated === false) {
        this.props.history.push('/')
      }
    };

    //return the component with the props
    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    };
  };
  //we are using React Redux to pass state between props without a parent/child relation
  //isAuthenticated is our local variable and state.isAuthenticated is redux
  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.isAuthenticated,
      username: state.username
    }
  };
  return connect(mapStateToProps)(Authenticate);
};
