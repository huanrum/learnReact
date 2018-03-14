import React from 'react';

import SearchPanl from './../../common/SearchPanl';

export default class FoodPage extends React.Component{

    search(items,regExp){
        return items.filter(i=>regExp.test(i.name));
    }
    render(){
        return (
            <div className="food">
                <SearchPanl type="food" search={this.search} childItem={item=>(
                    <div className="food-item">
                        <div>{item.id}</div>
                        <img src={item.src} />
                        <div>{item.name}</div>
                        <strong>{item.price}</strong>
                    </div>
                )}>
                Food
                </SearchPanl>
                
            </div>
        );
    }
}