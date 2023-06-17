const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute.js');
const niveis = require('./niveisRoute.js');
const turmas = require('./turmasRoute.js');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
    app.get("/", (req, res) => res.send("Olá!"))
}