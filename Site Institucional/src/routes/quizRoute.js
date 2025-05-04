var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.get("/buscarQuestao", function (req, res) {
    quizController.buscarQuestao(req, res)
})

router.post("/respostaQuestao", function (req, res) {
    quizController.respostaQuestao(req, res)
})

module.exports = router