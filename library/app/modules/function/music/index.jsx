import React from 'react';

import SearchPanl from './../../common/SearchPanl';

export default class MusicPage extends React.Component{

    search(items,regExp){
        return items.filter(i=>regExp.test(i.name));
    }
    update(render,index,items){
        items.forEach(i => i.active = false);
        items[Math.min(Math.max(index,0),items.length-1)].active = true;
        render();
    }
    leftRight(point){
        return Math.abs(point.x1 - point.x2)>50?(point.x1>point.x2?1:-1):0;
    }
    render(){
        return (
            <div className="music">
                <SearchPanl type="music" search={this.search} childItem={(item,index,items,render)=>(
                    <div className="music-item" style={{display:item.active?'':'none'}} 
                        onTouchStart={e=>item.point={x1:e.touches[0].pageX,y1:e.touches[0].pageY}} 
                        onTouchEnd={e=>this.update(render,index+this.leftRight(item.point),items)} 
                        onTouchMove={e=>item.point=Object.assign(item.point,{x2:e.touches[0].pageX,y2:e.touches[0].pageY})}>
                        <div>{index}</div>
                        <img src={item.src} />
                        <div>{item.name}</div>
                        <div>{item.author}</div>
                        {index>0&&<div className="music-item-prev" onClick={()=>this.update(render,index-1,items)}></div>||''}
                        {index<items.length-1&&<div className="music-item-next" onClick={()=>this.update(render,index+1,items)}></div>||''}
                    </div>
                )}>
                Music
                </SearchPanl>
            </div>
        );
    }
}