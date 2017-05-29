import React from 'react';
import ReactDOM from 'react-dom';

import http from './http.js';
import ShowDetail from './ShowDetail.jsx';

export default class ShowGrid extends React.Component {
    componentDidMount() {
        if(typeof this.props.list === 'string'){
            http(this.props.list,{pageSize:12,pageNumber:1})().then(req => this.setState({data: req.data.list}));
        }
    }
    render() {
        var list = this.props.list.map?this.props.list:(this.state && this.state.data) || [];
        var columns = {};
        list.map(l=>{
            for(var pro in l){
                columns[pro] = null;
            }
        });
        columns = Object.keys(columns);
        return (
            <div className="show-grid">
                <table>
                    <thead>
                        <tr>
                            {
                                columns.map(c=>(<th>{c}</th>))
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        list.map(l=>(<tr onClick={()=>this.show(l)}>
                            {
                                columns.map(c=>(<td>{l[c]}</td>))
                            }
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
    show(data){
        var parent = document.createElement('div');
        parent.className = 'dialog-parent';
        document.body.appendChild(parent);
        ReactDOM.render(<ShowDetail title="Show" data={data} remove={()=>document.body.removeChild(parent)}/>,parent);
    }
}