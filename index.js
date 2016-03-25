var koa = require('koa')
var app = koa()
var router = require('koa-router')()
router.get('/snackshere', function *(next) {
  this.status = 200
})

app
  .use(router.routes())

app.listen(2500)
