import React from 'react';


import SearchPanl from './../../common/SearchPanl';

export default class BookPage extends React.Component{
    
    search(items,regExp){
        return items.filter(i=>regExp.test(i.name));
    }
    render(){
        return (
            <div className="book">
                <SearchPanl type="book" search={this.search} childItem={item=>(
                    <div className="book-item" onClick={()=>alert(JSON.stringify(item))}>
                        <span>{item.id}</span>
                        <img src={item.src} />
                        <a>{item.name}</a>
                        
                    </div>
                )}>
                Book
                </SearchPanl>
            </div>
        );
    }
}