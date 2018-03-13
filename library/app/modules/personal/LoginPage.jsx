import React from 'react';

import data from '../common/data';

export default class LoginPage extends React.Component{

    login(entity){
        return new Promise(succ => {
            console.log('模拟登陆',entity);
            setTimeout(() => {
                data('username',entity.name);
                succ(entity);
            },2000);
        });
    }
    render(){
        var entity = {name:'seto',password:''};
        return (
            <div className="personal-login">
                <div>
                    <label>UserName</label>
                    <input defaultValue={entity.name} onChange={e=>entity.name=e.target.value} />
                </div>
                <div>
                    <label>Password</label>
                    <input defaultValue={entity.password} onChange={e=>entity.password=e.target.value} />
                    <a onClick={()=>this.props.router.push('/personal/password')}>忘记密码？</a>
                </div>
                <div>
                    <button onClick={()=>this.props.router.push('/personal/register')}>register</button>
                    <button onClick={()=>this.login(entity).then(r=>this.props.router.push('/'))}>Login</button>
                </div>
            </div>
        );
    }
}