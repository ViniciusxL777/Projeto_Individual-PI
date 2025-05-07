var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController")

router.get("/buscarDadosUsuario", function (req, res) {
    perfilController.buscarDadosUsuario(req, res)
})

router.get("/buscarDadosQuestao", function (req, res) {
    perfilController.buscarDadosQuestao(req, res)
})

router.get("/buscarDadosResultado", function (req, res) {
    perfilController.buscarDadosResultado(req, res)
})

module.exports = router