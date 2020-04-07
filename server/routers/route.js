const controllers = require('../controllers');
const register = require('../utils/route-register');
module.exports = {
    '/' :register('get' , "testroute/test.html"),
    '/home':register('get' , "index.html")
    
}