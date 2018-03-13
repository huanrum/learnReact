import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomePage from './modules/home';

import FunctionPage from './modules/function';
import BookPage from './modules/function/book';
import FoodPage from './modules/function/food';
import MediaPage from './modules/function/media';
import MusicPage from './modules/function/music';
import SportPage from './modules/function/sport';



import DetailPage from './modules/personal/DetailPage';
import LoginPage from './modules/personal/LoginPage';
import PasswordPage from './modules/personal/PasswordPage';
import RegisterPage from './modules/personal/RegisterPage';
import PersonalPage from './modules/personal';

import MainPage from './main';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" title="Main" component={MainPage}>
            <IndexRoute title="Home" component={HomePage} />
            <Route path="/home" title="Home" component={HomePage}>
               
            </Route>
            <Route path="/function" title="Function" component={FunctionPage}>
                <Route path="/function/book" title="Book" component={BookPage}></Route>
                <Route path="/function/food" title="Food" component={FoodPage}></Route>
                <Route path="/function/media" title="Media" component={MediaPage}></Route>
                <Route path="/function/music" title="Music" component={MusicPage}></Route>
                <Route path="/function/sport" title="Sport" component={SportPage}></Route>
            </Route>
            <Route path="/personal" title="Personal" component={PersonalPage}>
                <Route path="/personal/register" title="Register" component={RegisterPage}></Route>
                <Route path="/personal/login" title="Login" component={LoginPage}></Route>
                <Route path="/personal/password" title="Password" component={PasswordPage}></Route>
                <Route path="/personal/detail" title="Detail" component={DetailPage}></Route>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));