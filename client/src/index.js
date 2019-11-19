import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//=====================COMPONENTS======================
import App from './App';
import BaseLayout from './components/BaseLayout';
import Dashboard from './components/userComponents/Dashboard';
import DisplayData from './components/DisplayData';
import Register from './components/Register';
import Login from './components/Login';
//=====================NAVIGATION======================
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//=====================REACT REDUX=====================
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/stores/reducers/reducer';
import { setAuthenticationHeader } from './components/utilities/authentication';
import requireAuth from './components/utilities/requireAuthentication';
//=====================OTHER===========================
import * as serviceWorker from './serviceWorker';

// const store = createStore(reducer);

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

setAuthenticationHeader(localStorage.getItem('jsonwebtoken'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/dashboard' component={requireAuth(Dashboard)} />
          <Route path='/displayData' component={DisplayData} />
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
