import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import MainMenu from './MainMenu';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainFooter from './MainFooter';

export default class MainReact extends React.Component {
    render() {
        return (
            <div className="main-content">
                <div className="main-left">
                    <MainMenu menus={this.props.route.childRoutes} router={this.props.router}/>
                </div>
                <div className="main-right">
                    <MainHeader path={this.props.routes} actions={[{path:'/login',title:'Logout'},{path:'/about',title:'Helper'}]}/>
                    <MainContent >
                        {this.props.children}
                    </MainContent>
                    <MainFooter />
                </div>
            </div>
        );
    }
}