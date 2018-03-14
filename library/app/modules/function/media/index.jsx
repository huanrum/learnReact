import React from 'react';

import SearchPanl from './../../common/SearchPanl';

export default class MediaPage extends React.Component{

    search(items,regExp){
        return items.filter(i=>regExp.test(i.name));
    }
    render(){
        return (
            <div className="media">
                <SearchPanl type="media" search={this.search} childItem={item=>(
                    <div className="media-item">
                        <div>{item.id}</div>
                        <img src={item.src} />
                        <div>{item.name}</div>
                        <strong>{item.price}</strong>
                        <div>{item.date}</div>
                        <div>{item.email}</div>
                    </div>
                )}>
                Media
                </SearchPanl>
                
            </div>
        );
    }
}