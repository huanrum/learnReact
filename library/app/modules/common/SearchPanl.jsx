
import React from 'react';

export default class SearchPanl extends React.Component{

    render(){
        return (
            <div class="search-panl">
                <div>
                    <input onClick={e=>{this.props.search(e.target.value)}}/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}