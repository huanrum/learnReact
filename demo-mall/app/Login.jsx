import React from 'react';
import { Link } from 'react-router';

import http from './common/http';

export default class LoginReact extends React.Component {
    
    render() {
        var entity = {name:'seto',password:123456};
        return (
            <div className="main-login dialog-parent">
                <form className="content show-dialog">
                    <div className="contnet-item">
                        <div className="title">Name</div>
                        <input defaultValue={entity.name} onChange={e=>entity.name=e.target.value} />
                    </div>
                    <div className="contnet-item">
                        <div className="title">Password</div>
                        <input type="password" defaultValue={entity.password} onChange={e=>entity.password=e.target.value} />
                    </div>
                    <div className="text-align-center">
                        <a className="button" onClick={()=>{
                            console.log(entity);
                            http('login',entity)().then((req) => {
                                localStorage['[react]/token'] = req.data.token;
                                window.token = req.data.token;
                                console.log('login success !',req.data);
                                this.props.router.push('/')
                            })
                        }}>Login</a>
                    </div>
                </form>
            </div>
        );
    }
}