const methods = require('methods');
const fs = require('fs');
const path = require('path');
const config = require('../config');
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

function generateReadFile(url){
    let p = url;
    if(!path.isAbsolute(url)){
        // p = path.join(__dirname , "../../static/output", url);
        p = path.join(config.route.base, url);
    }
    return function(ctx ){
        ctx.response.type = path.extname(p);
        ctx.response.status = (ctx.response.body=fs.createReadStream(p))?200:404;
    }
}

function registe(method, fn){
    if(arguments.length===1){
        //method use default 'get'
        return new Route('get' , fn);
    }
    if(fn instanceof String || typeof fn == 'string'){
        // if a path
        return new Route(method , generateReadFile(fn));
    }
    return new Route(method, fn);
}

module.exports = registe;
module.exports.isRoute = function(obj){
    return obj instanceof Route;
}

