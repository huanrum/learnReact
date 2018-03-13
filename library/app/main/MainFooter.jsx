import React from 'react';

export default class MainFooter extends React.Component{

    render(){
        return (
            <div className="main-footer">
                {
                    ['home','function','personal'].map(btn=>(
                        <div className="main-footer-button" key={btn}>
                            <a onClick={()=>this.props.navigate(btn)}>{btn}</a>
                        </div>
                    ))
                }
            </div>
        );
    }
}