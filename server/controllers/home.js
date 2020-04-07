const fs = require('fs');
const path = require('path')
// console.log('homejs path',__dirname);
module.exports = function(ctx, next){
    // console.log('ctx in home',ctx)
    ctx.response.type = 'html';
    ctx.response.status = 200;
    ctx.response.body = fs.createReadStream(path.join(__dirname,'../../static/output/index.html'));
}