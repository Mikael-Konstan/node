const Koa = require('koa');
const router = require('koa-router')();
const Fs = require('fs')
const config = require('./node.config')

const app = new Koa({ proxy: true });

app.proxy = true

const index =  (ctx, next)=> {
  ctx.body = 'Hi Potato!';
};

app.use(router.get('/', index));
app.use(router.routes());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

function readEtc(){

}
function writeEtc(){

}
app.listen(config.serverPort, () => {
  console.log(`app start listening on port ${config.serverPort}`)
});