import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Route, Switch } from 'react-router-dom';

import App from './components/home';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Layout from './components/Layout';
import Home from './components/home';
import Contact from './components/contact';

import { createBrowserHistory } from 'history';
import Find from './components/find';
import About from './components/about';
import Unsplash from './components/Unsplash';

function main() {
  ReactDOM.render(
      <Router history={createBrowserHistory({})}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/contact'  component={Contact}/>
            <Route path='/about'  component={About}/>
            <Route path='/find'  component={Find}/>
            <Route path='/unsplash'  component={Unsplash}/>
          </Switch>
        </Layout>
      </Router>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
