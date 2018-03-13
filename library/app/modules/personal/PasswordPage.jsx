import React from 'react';

export default class PasswordPage extends React.Component{
    constructor(){
        super();
        this.state = {
            step:0
        };
    }
    password(entity){
        return new Promise(succ => {
            console.log('模拟注册',entity);
            setTimeout(() => succ(entity),2000);
        });
    }
    next(entity){
        if(this.state.step){
            this.password(entity).then(r => this.props.router.go(-1));
        }else{
            this.setState({step:this.state.step + 1});
        }
        
    }
    render(){
        var entity = {name:'seto',password:''};
        return (
            <div className="personal-password">
                <div>
                    <label>UserName</label>
                    <input defaultValue={entity.name} onChange={e=>entity.name=e.target.value} readOnly="true"/>
                </div>
                {
                    !this.state.step && (
                        <div>
                            <label>Telphone</label>
                            <input defaultValue={entity.telphone} onChange={e=>entity.telphone=e.target.value} />
                        </div>
                    ) || ''
                }
                {
                    !this.state.step && (
                        <div>
                            <label>Code</label>
                            <input defaultValue={entity.code} onChange={e=>entity.code=e.target.value} />
                        </div>
                    ) || ''
                }
                {
                    this.state.step && (
                        <div>
                            <label>Old Password</label>
                            <input defaultValue={entity.password} onChange={e=>entity.password=e.target.value} />
                        </div>
                    ) || ''
                }
                {
                    this.state.step && (
                        <div>
                            <label>New Password</label>
                            <input defaultValue={entity.password} onChange={e=>entity.password=e.target.value} />
                        </div>
                    ) || ''
                }
                {
                    this.state.step && (
                        <div>
                            <label>Re-Password</label>
                            <input defaultValue={entity.repassword} onChange={e=>entity.repassword=e.target.value} />
                        </div>
                    ) || ''
                }
                <div>
                    <button onClick={()=>this.props.router.go(-1)}>Cancel</button>
                    <button onClick={()=> this.next(entity)}>Register</button>
                </div>
            </div>
        );
    }
}