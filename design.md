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
- type: String # post / log /essay
- avatar :String #url
- title : String   # unique index
- content : String
- isdelete: boolean
- likes :Number
- dislikes:Number

## comments
- _id :ObjectId
- owner: githun account username
- belongedPost: ObjectId
- content: String
- root: ObjectId
- parent : ObjectId
- isdelete: Boolean
- likes: Number
- dislikes:Number

## labels
- _id: ObjectID
- name :String # unique index
- type :String # normal / serial 
- reference: Number
- isdelete: Boolean
- likes: Number
- dislikes:Number

## demos
- _id: ObjectId
- title: String # unique index
- url : String
- describe: String
- avatar :String
- githubLink:String
- likes: Number
- dislikes:Number

<!-- ## todos
- _id:ObjectId
- title:String # unique index
- describe :String
- status: String # pending / resolve /reject -->

# URLs
- `get` / :首页
- `get` /posts/:page : 博文目录 分页
- `get` /logs/:page : 日志目录 分页
- `get` /essays/:page :文章目录分页
- `get` /labels : 标签目录
- `get` /post/:id :博文页面
- `get` /essay/:id
- `get` /log/:id
- `get` /label/:labelName/:page : 该标签下所有内容目录 分页 

# APIs
- `get` /api/posts/:page
- `get` /api/logs/:page
- `get` /api/essays/:page
- `get` /api/labels
- `get` /api/post/:id
- `get` /api/log/:id
- `get` /api/essay/:id
- `get` /api/comments/:postId/:page
- `get` /api/category/:labelName/:page
- `post` /api/comments/:postId

<!-- - `post` /api/post
- `post` /api/log
- `post` /api/essay
- `post` /api/label
- `post` /api/serial

- `patch` /api/post/:id
- `patch` /api/log/:id
- `patch` /api/essay/:id  -->
 
# log
mongoose 全局require得到的是同一个实例
```js
const mongoose = module.exports = exports = new Mongoose({
  [defaultMongooseSymbol]: true
});
```


