const methods = require('methods');

class Route{
    /**
     * 
     * @param {String} method  http method 'get','post' e.g. 
     * @param {*} fn 
     */
    constructor(method , fn){
        if(!method || !methods.includes(method.toLowerCase())){
            throw new Error("Illegal http method when registe route");
        }
        if(!fn instanceof Function){
            throw new Error('controller is not a function when registe route');
        }
        this.method = method.toLowerCase();
        this.controller = fn;
    }
}

function registe(method, fn){
    if(arguments.length===1){
        //method use default 'get'
        return new Route('get' , fn);
    }
    return new Route(method, fn);
}

module.exports = registe;
module.exports.isRoute = function(obj){
    return obj instanceof Route;
}

