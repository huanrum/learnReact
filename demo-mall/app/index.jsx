import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import LoginReact from './Login';
import AboutReact from './About';
import MainReact from './main/MainPage';
import Book from './modules/Book';
import Food from './modules/Food';
import Sport from './modules/Sport';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/login" component={LoginReact}/>
        <Route path="/about" component={AboutReact}/>
        <Route path="/" title="Home" component={MainReact}>
            <Route path="/food" title="Food" component={Food}/>
            <Route path="/sport" title="Sport" component={Sport}/>
            <Route path="/book" title="Book" component={Book}/>
        </Route>
    </Router>
), document.getElementById('app'));