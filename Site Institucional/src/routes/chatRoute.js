var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/chatController")

router.get("/trazerTodosDebates", function (req, res) {
    perfilController.trazerTodosDebates(req, res)
})

router.get("/trazerConteudoDebate", function (req, res) {
    perfilController.trazerConteudoDebate(req, res)
})

router.get("/enviarComentarioTextoImagem", function (req, res) {
    perfilController.enviarComentarioTextoImagem(req, res)
})

module.exports = router