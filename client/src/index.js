import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//=====================COMPONENTS======================
import App from './App';
import BaseLayout from './components/BaseLayout';
import DisplayData from './components/DisplayData';
import Register from './components/Register';
import Login from './components/Login';
//=====================USER COMPONENTS=================
import Dashboard from './components/userComponents/Dashboard';
import UserDisplayData from './components/userComponents/UserDisplayData';
//=====================NAVIGATION======================
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//=====================REACT REDUX=====================
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { setAuthenticationHeader } from './components/utilities/authentication';
import requireAuth from './components/utilities/requireAuthentication';
//=====================REDUCERS AND STORES=============
import userReducer from './stores/reducers/reducer';
//=====================OTHER===========================
import * as serviceWorker from './serviceWorker';

const store = createStore(
  userReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); //remove or disable redux devtools extension when in production

setAuthenticationHeader(localStorage.getItem('jsonwebtoken'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/dashboard' exact component={requireAuth(Dashboard)} />
          <Route path='/displayData' component={DisplayData} />
          <Route path='/userDisplayData' exact component={requireAuth(UserDisplayData)} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
