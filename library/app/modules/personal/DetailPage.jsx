import React from 'react';

import data from '../common/data';

export default class DetailPage extends React.Component{

    constructor(){
        super();
        this.state = {
            name:data('username') || 'seto sun',
            info:'',
            tel:'',
            email:''
        };
        this.detail().then(data => this.setState(data));
    }

    detail(){
        return new Promise(succ => {
            console.log('获取用户信息',this.state.name);
            setTimeout(() => succ({
                info:'这是一个前端工程师，啥都会一点',
                tel:'111222333',
                email:'123@qq.com'
            }),2000);
        }); 
    }

    render(){
        return (
            <div className="personal-detail">
                <div className="title">{this.state.name}</div>
                <div>{this.state.info}</div>
                <div>
                    <span>{this.state.tel}</span>
                    <span>{this.state.email}</span>
                </div>
            </div>
        );
    }
}