var express = require('express');
const mockMiddleware = require("@huangzj/express-mock");

const app = express();

app.use(mockMiddleware())


app.use(express.static("html", {
  extensions: ['html']
}));

const server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})