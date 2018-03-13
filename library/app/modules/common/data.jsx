

export default (function(){

    var data = {};
    return function(key,val){
        if(val){
            data[key] = val; 
        }else if(key){
            return data[key];
        }else{
            console.log('请输入一个关键字');
        }
    };
})();