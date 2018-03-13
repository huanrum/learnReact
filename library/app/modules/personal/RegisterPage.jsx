import React from 'react';

export default class RegisterPage extends React.Component{

    register(entity){
        return new Promise(succ => {
            console.log('模拟注册',entity);
            setTimeout(() => succ(entity),2000);
        });
    }
    render(){
        var entity = {name:'seto',password:''};
        return (
            <div className="personal-register">
                <div>
                    <label>UserName</label>
                    <input defaultValue={entity.name} onChange={e=>entity.name=e.target.value} />
                </div>
                <div>
                    <label>E-mail</label>
                    <input defaultValue={entity.email} onChange={e=>entity.email=e.target.value} />
                </div>
                <div>
                    <label>Telphone</label>
                    <input defaultValue={entity.telphone} onChange={e=>entity.telphone=e.target.value} />
                </div>
                <div>
                    <label>Password</label>
                    <input defaultValue={entity.password} onChange={e=>entity.password=e.target.value} />
                </div>
                <div>
                    <label>re-Password</label>
                    <input defaultValue={entity.repassword} onChange={e=>entity.repassword=e.target.value} />
                </div>
                <div>
                    <button onClick={()=>this.props.router.go(-1)}>Cancel</button>
                    <button onClick={()=>this.register(entity).then(r=>this.props.router.go(-1))}>Register</button>
                </div>
            </div>
        );
    }
}