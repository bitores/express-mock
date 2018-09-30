# express-mock


** install **

> npm i --save @huangzj/express-mock

- const mockMi = require('@huangzj/express-mock')
- expressApp.use('/', mock())
- create .mock.js

```
# .mock.js
module.exports = {
  "GET /api": "https://cnodejs.org",
  "POST /users": function (req, res) {},
  "GET /ss": function (req, res) {
    res.end('ss ok....')
  },
  "GET /ok1/:id": function (req, res) {
    res.end(`ss ok=${req.params.id}`)
  },
  "GET /sss2": function (req, res) {
    res.redirect('/ok/34534')
  }
}
```