import React from 'react';

export default class MainHeader extends React.Component{

    render(){
        var showToolBar = false;
        return (
            <div className="main-header">
                <div className="main-header-back">
                    <a onClick={()=>this.props.navigate(-1)}></a>
                </div>
                <div className="main-header-title">
                    {this.props.active.title}
                </div>
                <div className="main-header-toolbar">
                    <a onClick={()=>showToolBar=!showToolBar}>***</a>
                    {
                        showToolBar && this.props.active.toolbars && <ul>
                            this.props.active.toolbars.map(tl => <a onClick={tl.callback}>{tl.title||tl.name}</a>)
                        </ul>
                    }
                </div>
            </div>
        );
    }
}