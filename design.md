# 中间件
koa-static
- 静态文件路由中间件

koa-router
- 其他路由

mongoose
- 数据库

# 目录结构
- config.js  # 配置文件
- index.js # 后端入口
- server # 后端代码
    - routers  # 路由目录
        - config.js # 路由配置文件
        - index.js # 用路由配置文件生成router
    - dbhelpers # 数据库相关目录
    - models # 数据模型model层目录
    - services # 业务层目录
    - controllers # 操作层目录
- static # 前端静态资源

# 数据库表
## posts
- _id :ObjectId
- labels: [string] # normal labels
- serial: [string] # serial labels
- type: String # post / log 
- createdate: Date
- updateDate: Date
- content : String

## comments
- _id :ObjectId
- owner: githun account username
- date: Date
- content: String
- root: ObjectId
- parent : ObjectId

## labels
- _id: ObjectID
- name :String
- type :String # normal / serial 
- reference: Number
- date : Date

# log
mongoose 全局require得到的是同一个实例
```js
const mongoose = module.exports = exports = new Mongoose({
  [defaultMongooseSymbol]: true
});
```


