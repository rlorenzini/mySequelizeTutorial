import React,{ Component } from 'react';
import { connect } from 'react-redux';

export default function requireAuth(ComposedComponent) {
  //our function is passing through an entire Component as a variable
  class Authenticate extends Component {
    //we are passing props.history, so we must set our constructor with props
    constructor(props) {
      super(props)
      console.log(this.props)
      //if authenticated is not true, push the page back to the index page
      if(!this.props.isAuthenticated) {
        this.props.history.push('/')
      }
    };

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
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
  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.isAuthenticated
    }
  };
  return connect(mapStateToProps)(Authenticate);
};
