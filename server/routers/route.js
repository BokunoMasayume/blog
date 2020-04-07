const controllers = require('../controllers');
const register = require('../utils/route-register');
module.exports = {
    '/' :register('get' , controllers.home)
}