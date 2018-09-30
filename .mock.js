module.exports = {
  "GET /api": "https://cnodejs.org",
  "POST /users": function (req, res) {},
  "GET /ss": function (req, res) {
    res.end('ss ok....')
  },
  "GET /ok1/:id": function (req, res) {
    res.end(`ss ok=${req.params.id}`)
  },
  "GET /ok2/:id": function (req, res) {
    res.end(`ss ok=${req.params.id}`)
  },
  "GET /ok4/:id": function (req, res) {
    res.end(`ss ok=${req.params.id}`)
  },
  "GET /ok4/:id": function (req, res) {
    res.end(`ss ok=${req.params.id}`)
  },
  "GET /ok7/:id": function (req, res) {
    res.end(`ss ok=${req.params.id}`)
  },
  "GET /sss2": function (req, res) {
    res.redirect('/ok/34534')
  }
}