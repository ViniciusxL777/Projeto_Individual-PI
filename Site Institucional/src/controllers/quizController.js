var quizModel = require("../models/quizModel")

function buscarQuestao(req, res) {
    var idQuestao = req.query.idQuestao

    quizModel.buscarQuestao(idQuestao)

        .then(
            function (resultado) {
                res.json(resultado[0])
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar a questão! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function respostaQuestao(req, res) {
    var pkUsuario = req.body.usuarioServer
    var pkQuestao = req.body.questaoServer
    var resultadoQuestao = req.body.respostaServer
    var pontosQuestao = req.body.pontosServer

    quizModel.respostaQuestao(pkUsuario, pkQuestao, resultadoQuestao, pontosQuestao)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao armazenar sua resposta! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function pontosQuiz(req, res) {
    var pkUsuario = req.body.pkUsuarioServer
    var pontos = req.body.pontosServer

    quizModel.pontosQuiz(pkUsuario, pontos)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao armazenar seus pontos! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function respostaQuestao(req, res) {
    var pkUsuario = req.body.usuarioServer
    var pkQuestao = req.body.questaoServer
    var resultadoQuestao = req.body.respostaServer
    var pontosQuestao = req.body.pontosServer

    quizModel.respostaQuestao(pkUsuario, pkQuestao, resultadoQuestao, pontosQuestao)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao armazenar sua resposta! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function buscarQuestaoRespondida(req, res) {
    var pkUsuario = req.query.pkUsuario

    quizModel.buscarQuestaoRespondida(pkUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar a resposta da questao! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function updateResposta(req, res) {
    var pkQuestao = req.body.questaoServer
    var pkUsuario = req.body.usuarioServer
    var resultadoQuestao = req.body.respostaServer
    var pontosQuestao = req.body.pontosServer

    quizModel.updateResposta(resultadoQuestao, pontosQuestao, pkQuestao, pkUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao realizar o update! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    buscarQuestao,
    respostaQuestao,
    pontosQuiz,
    buscarQuestaoRespondida,
    updateResposta
};