const Koa = require('koa');
const route = require('koa-route');
const bodyparser = require('koa-bodyparser');
const mongoose = require('mongoose');
const config= require('./config');
const formparse = require('koa-formdataparse');


const fs = require('fs');//for test
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



// app.use(async function(ctx, next){
//     console.log('>>>one');
//     await next();
//     console.log("<<<one");
// });
// app.use(parseFormData());
// app.use(formparse({
//     limit: '20mb'
// }));
app.use(route.post('/',function(ctx){
    ctx.body = ctx.request.formData;
    // console.log(ctx.request.formData);
    console.log("ctx.request.charset");
    // console.log(ctx.request.body)
    // fs.open('./'+ctx.request.formData.img.filename , 'w', function(err,fd){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
        fs.writeFileSync('./test.png', Buffer.from(ctx.request.formData.img.data , "binary") )
    // })
}));
app.use(route.get('/',function(ctx){
    ctx.body = "fff"
    fs.createReadStream('./test.html');
}))
app.use(route.get('/test.png' , function(ctx){
    ctx.body = fs.createReadStream('./test.png')
}))



// app.listen(8979);

mongoose.connect(`mongodb://${config.database.mongo.username}:${config.database.mongo.password}@${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.database}`)
.then()

console.log("listening 8979");