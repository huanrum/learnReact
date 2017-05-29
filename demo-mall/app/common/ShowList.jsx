import React from 'react';
import ReactDOM from 'react-dom';

import http from './http.js';
import ShowDetail from './ShowDetail.jsx';

class ShowItem extends React.Component {
    render() {
        return (
            <div className="show-item" onClick={()=>this.show(this.props)}>
                <div className="title">{this.props.data.name}</div>
                <img className="img" src={this.props.data.src} />
            </div>
        );
    }
    show(props){
        var parent = document.createElement('div');
        parent.className = 'dialog-parent';
        document.body.appendChild(parent);
        ReactDOM.render(<ShowDetail title="Show" data={props.data} remove={()=>document.body.removeChild(parent)}/>,parent);
    }
}

export default class ShowList extends React.Component {
    componentDidMount() {
        if(typeof this.props.list === 'string'){
            http(this.props.list,{pageSize:12,pageNumber:1})().then(req => this.setState({data: req.data.list}));
        }
    }
    render() {
        var list = this.props.list.map?this.props.list:(this.state && this.state.data) || [];
        return (
            <div className="show-list">
                {
                    list.map(item=>(<ShowItem data={item} />))
                }
            </div>
        );
    }
}