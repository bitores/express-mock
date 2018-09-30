module.exports = {
    // Support type as Object and Array
    'GET /api/users': {
        users: [1, 2]
    },

    // Method like GET or POST can be omitted
    '/api/users/1': {
        id: 1
    },
    'GET /api/uses/45': {
        code: 0,
        data: [],
        msg: "323"
    },
    'GET /api/:id': (req, res) => {
        res.json({
            id: res.params.id
        })
    },

    'POST /api/users': (req, res) => {
        const id = parseInt(req.query.id);
        switch (id) {
            case 1:
                res.json({
                    success: true,
                    data: {
                        id: id
                    },
                });
                break;
            default:
                res.json({
                    success: true,
                    data: {
                        id: id
                    },
                });
                break;
        }
    },

    // Support for custom functions, the API is the same as express@4
    'POST /api/users/create': (req, res) => {
        res.end('OK');
    },
    // /cnode/api 会被代理到 https://cnodejs.org/api, 不能代理 https
    'GET /cnode/(.*)': 'http://shrek.imdevsh.com'
};