const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');

const config = require('./../config');//全局配置文件
const routers = require('./routers/index');//路由配置文件

const app = new Koa();

app.use(bodyParser());//json解析

app.use(koaStatic(path.join(__dirname,'./../static')));//静态资源

app.use(views(path.join(__dirname,'./views'),{//模板引擎
    extension:'ejs'
}));

app.use(routers.routes()).use(routers.allowedMethods());//路由支持

app.listen(config.port, function(){
    console.log("server is runing, port is 3000")
});