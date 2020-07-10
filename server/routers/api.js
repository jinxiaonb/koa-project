/** 
 * 子路由
*/

const router = require('koa-router')();
const testApi = require('./../controllers/test-api');

const routers = router.post('/testPost.json', testApi.testJsonPost).get('/testGet.json', testApi.testJsonGet);

module.exports = routers;