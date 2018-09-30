const express = require('express')

const mockMiddleware = require("../src/index.js");

const app = express();

app.use('/index', function (req, res) {
  res.end('index')
})

app.use('/', mockMiddleware)

const server = app.listen(8019, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})