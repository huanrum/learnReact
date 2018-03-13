import React from 'react';
import { Link } from 'react-router';

import './index.less';


export default class PersonalPage extends React.Component{

    render(){
        return (
            <div className="personal">
                {
                    (!this.props.children)&&this.props.route.childRoutes.map(router=><div className="personal-button" key={router.path}><Link to={router.path}>{router.title}</Link></div>)
                }
                {
                    this.props.children
                }
            </div>
        );
    }
}