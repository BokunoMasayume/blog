const Koa = require('koa');
// const route = require('koa-route');
const bodyparser = require('koa-bodyparser');
// const mongoose = require('mongoose');
const config= require('./config');
// const formparse = require('koa-formdataparse');
const fs = require('fs');
const router = require('./routers');



//get request body 'bodyparser' -> 'co-body' -> 'raw-body'(listen event like ondata onabort e.g.)

const app = new Koa();

//common function MUST RETURN  next() ,because async function natually return promise but common function not.



app.use(bodyparser({
    enableTypes:['json' , 'form', 'text',  'xml'],
    // extendTypes:{
    //     text: ['text/plain','multipart/form-data']
    // },
    // encoding:null
}));

app.use(router.routes()).use(router.allowedMethods);




app.listen(8979);

// mongoose.connect(`mongodb://${config.database.mongo.username}:${config.database.mongo.password}@${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.database}`,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });

// const testModel = require('./server/models/test');
// new testModel({
//     name:"kanda",
//     age:33,
//     comments:['first1','second1','thir1d','forth1']
// }).save(function(err,obj){
//     if(err){
//         console.log('fail to save:',err);
//         return;
//     }
//     console.log('saved successful:',...arguments);
// })

console.log("listening 8979");