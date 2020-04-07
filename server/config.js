const path = require('path');
module.exports = {
    port: 8989,

    database:{
        mongo:{
            host: 'localhost',
            port: '27017',
            password: "allen",
            username: "blogadmin",
            database: "koa-blog"
        }
    },

    admin:'BokunoMasayume',
    route:{
        base:path.join(__dirname , '../static/output')
    }
}