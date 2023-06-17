const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute.js');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.get("/", (req, res) => res.send("Olá!"))
}