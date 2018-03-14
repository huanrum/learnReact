import React from 'react';

export default class MainContent extends React.Component{

    constructor(){
        super();
        this.state = {
            height:''
        };
        setTimeout(()=>{
            var headerHeight =  document.querySelector('.main-header').offsetHeight,
                footHeight = document.querySelector('.main-footer').offsetHeight;
            this.setState({
                height:window.innerHeight - headerHeight - footHeight + 'px'
            });
        },1000);
    }
    render(){
        return (
            <div className="main-content" style={{height:this.state.height}}>
                {this.props.children}
            </div>
        );
    }
}