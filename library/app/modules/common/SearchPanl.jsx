
import React from 'react';

import http from './http';

export default class SearchPanl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            items:[]
        };
        http(props.type)().then(req=>{
            req.data.forEach((i,index) =>i.active=index===0);
            this.setState({
                data:req.data,
                items:req.data
            });
        });
    }
    search(val){
        var items = this.props.search(this.state.data,new RegExp(val,'i')) || this.state.data;
        this.state.data.forEach((i,index) =>i.active=false);
        items.forEach((i,index) =>i.active=index===0);
        this.setState({
            items:items
        });
    }
    render(){
        return (
            <div className="search-panl">
                <div className="search-panl-content">
                    <input onChange={e=>{this.search(e.target.value)}}/>
                    <div className="data-content">
                        {
                            this.state.items.map((i,index)=>(
                                <div className="data-content-row" key={i.id}>
                                    {this.props.childItem(i,index,this.state.items,()=>this.setState(this.state))||''}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="search-panl-footer">
                    {this.props.children}
                </div>
            </div>
        );
    }
}