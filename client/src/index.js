import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BaseLayout from './components/BaseLayout';
import DisplayData from './components/DisplayData';
import Register from './components/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/displayData' component={DisplayData} />
        <Route path='/register' component={Register} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
