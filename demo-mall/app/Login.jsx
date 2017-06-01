import React from 'react';
import { Link } from 'react-router';

export default class LoginReact extends React.Component {
    render() {
        return (
            <div className="main-login dialog-parent">
                <form className="content show-dialog">
                    <div className="contnet-item">
                        <div className="title">Name</div><input />
                    </div>
                    <div className="contnet-item">
                        <div className="title">Password</div><input type="password" />
                    </div>
                    <div className="text-align-center">
                        <Link to="/">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}