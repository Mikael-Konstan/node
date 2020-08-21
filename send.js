const Koa = require('koa');
const router = require('koa-router')();
const Fs = require('fs')

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
const port = 3000
app.listen(port, () => {
  console.log(`app start listening on port ${port}`)
});