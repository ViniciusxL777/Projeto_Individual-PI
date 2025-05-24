var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController")

router.get("/buscarDadosResultados", function (req, res) {
    perfilController.buscarDadosResultados(req, res)
})

router.get("/buscarDadosQuestoes", function (req, res) {
    perfilController.buscarDadosQuestoes(req, res)
})

router.get("/buscarDadosQuiz", function(req, res) {
    perfilController.buscarDadosQuiz(req, res)
})

router.get("/trazerDebatesCriados", function(req, res) {
    perfilController.trazerDebatesCriados(req, res)
})

module.exports = router