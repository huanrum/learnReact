
var baseUrl =  (function(){
    if(/192\./.test(location.hostname) || location.hostname === '127.0.0.1' || location.hostname === 'localhost'){
        return location.protocol +'//'+ location.hostname +':8888/react/mall/';
    }else{
        return 'http://huanrum.oicp.net:23896/react/mall/';
    }
})();

if (typeof window.fetch === 'undefined') {
    window.fetch = function (url, option) {
        var xhr = null, callBack = [],errorBack = [];
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/xml');
            }
        } else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.onreadystatechange = onreadystatechange;
        xhr.open(option.method, url, true);
        xhr.send(option.body);

        return {
            then: then,
            error:error
        }

        function onreadystatechange() {
            var data = {
                text:function(){
                    return xhr.responseText;
                },
                json:function(){
                    return JSON.parse(xhr.responseText);
                }
            };
            if (xhr.readyState === 4 && xhr.status === 200) {
                    callBack.forEach(function(fn){
                        data = fn(data) || data;
                    });
				} else if (xhr.readyState === 3 && xhr.status !== 200) {
					errorBack.forEach(function(fn){
                        data = fn(data) || data;
                    });
				}
        }

        function then(fn) {
            callBack.push(fn);
            return this;
        }
        function error(fn) {
            errorBack.push(fn);
            return this;
        }
    };
}


export default function (url, parms) {
    var parmStr = Object.keys(parms || {}).sort(function (a, b) { return a.length - b.length; }).map(function (k) {
        if (new RegExp(':' + k).test(url)) {
            url.replace(new RegExp(':' + k, 'g'), parms[k]);
        } else {
            return k + '=' + parms[k];
        }
    }).filter(function (i) { return !!i; }).join('&');

    return function (data, method) {
        var option = { method: method };
        if (data) {
            option.method = option.method || 'POST';
            option.body = JSON.stringify(data);
        } else {
            option.method = option.method || 'GET';
        }
        return fetch((/^(http:|https:)/.test(url) ? '' : baseUrl) + url + (parmStr ? '?' : '') + parmStr, option).then(function (req) {
            return req.json();
        });
    }
}
