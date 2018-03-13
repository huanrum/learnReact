import React from 'react';

import './index.less';

import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainFooter from './MainFooter';

export default class MainPage extends React.Component{

    navigate(arg){
        if(/^\-?\d+$/.test(arg)){
            this.props.router.go(arg);
        }else{
            this.props.router.push(arg);
        }
    }
    render(){
        return (
            <div>
                <MainHeader active={this.props.routes[this.props.routes.length-1]} navigate={arg=>this.navigate(arg)}></MainHeader>
                <MainContent navigate={arg=>this.navigate(arg)}>
                    {this.props.children}
                </MainContent>
                <MainFooter navigate={arg=>this.navigate(arg)}></MainFooter>
            </div>
        );
    }
}