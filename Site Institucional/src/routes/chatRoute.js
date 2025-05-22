var express = require("express");
var router = express.Router();

var chatController = require("../controllers/chatController")

router.get("/trazerTodosDebates", function (req, res) {
    chatController.trazerTodosDebates(req, res)
})

router.get("/buscarDadosDebate", function (req, res) {
    chatController.buscarDadosDebate(req, res)
})

router.get("/enviarComentarioTextoImagem", function (req, res) {
    chatController.enviarComentarioTextoImagem(req, res)
})

router.post("/cadastrarDebate", function (req, res) {
    chatController.cadastrarDebate(req, res)
})

module.exports = router