const routes = require('./route');
const Router = require('koa-router');
const {isRoute} = require('../utils/route-register');

//root router
const rootRouter = new Router();

/**
 * 
 * @param {Router} router this layer's root router 
 * @param {Object} subroute this layer's route obj
 */
function scan(router , subroute){
    if(!router instanceof Router || ! subroute instanceof Object){
        throw new Error("router must be an instance of koa-router,route must be object ");
    }
    for(let [url, obj] of Object.entries(subroute)){
        if(isRoute(obj)){
            //leaf node
            router[obj.method](url, obj.controller);
        }
        else{
            //not leaf node
            let subRouter = scan(new Router() , obj);
            router.use(url , subRouter.routes() , subRouter.allowedMethods());
        }
    }


    return router;
}


module.exports = scan(rootRouter,routes )
