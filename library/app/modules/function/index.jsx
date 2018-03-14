import React from 'react';
import { Link } from 'react-router';

import './index.less';

export default class FunctionPage extends React.Component{

    render(){
        return (
            <div className="function">
            {
                (!this.props.children)&&this.props.route.childRoutes.map(router=>(
                    <div className="function-button" key={router.path} onClick={()=>this.props.router.push(router.path)}>
                        <div className="image">
                            <div>{router.title}</div>
                        </div>
                        <a>{router.title}</a>
                    </div>
                ))
            }
            {
                this.props.children
            }
            </div>
        );
    }
}