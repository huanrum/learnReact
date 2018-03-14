import React from 'react';

import SearchPanl from './../../common/SearchPanl';

export default class SportPage extends React.Component{

    search(items,regExp){
        return items.filter(i=>regExp.test(i.name));
    }
    render(){
        return (
            <div className="sport">
                <SearchPanl type="sport" search={this.search} childItem={item=>(
                    <div className="sport-item">
                        <div>{item.id}</div>
                        <div><img src={item.src} /></div>
                        <div>{item.name}</div>
                    </div>
                )}>
                Sport
                </SearchPanl>
               
            </div>
        );
    }
}