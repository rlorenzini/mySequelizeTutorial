import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';

//this is a High Order Component, meaning any component with requireAuth()
//will inherit from this component
//check index.js for components which inherit from this HOC
export const StateContext = React.createContext();

export default function requireAuth(ComposedComponent) {

  const AuthenticateContext = props => {

    const [username, setUsername] = useState('');
    const [userid, setUserid] = useState('');

    useEffect(() => {
      if(!this.props.isAuthenticated) {
        this.props.history.push('/')
      }
    }, [this.props.isAuthenticated])

      return (
        <ComposedComponent
        value={(
          username, setUsername,
          userid, setUserid
        )}
        {...this.props}/>
      );
    };
    // return StateProvider;
  };

  // const mapStateToProps = (state) => {
  //   return {
  //     isAuthenticated: state.isAuthenticated
  //   }
  // };
  // connect(mapStateToProps)(AuthenticateContext);
