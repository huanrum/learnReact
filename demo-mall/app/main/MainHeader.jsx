import React from 'react';
import { Link } from 'react-router';

export default class MainHeader extends React.Component {
    render() {
        return (
            <div className="main-header">
                <div className="left">
                    {this.props.path.map(l=><a key={l.path}>{l.title}</a>)}
                </div>
                <div className="right">
                    {this.props.actions.map(l=><Link key={l.path} to={l.path}>{l.title}</Link>)}
                </div>
            </div>
        );
    }
}