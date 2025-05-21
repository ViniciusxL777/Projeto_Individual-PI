var perfilModel = require("../models/chatModel")

function trazerTodosDebates(req, res) {

    perfilModel.trazerTodosDebates()
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar dadosDebates! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function trazerConteudoDebate(req, res) {
    var pkDebate = req.query.pkDebate

    perfilModel.trazerConteudoDebate(pkDebate)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar dadosResultados do usuário! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function enviarComentarioTextoImagem(req, res) {
    var pkUsuario = req.body.usuarioServer
    var comentario = req.body.comentarioTextoServe
    var pkDebate = req.body.pkDebateServer
    var pkUsuario = req.body.usuarioServer

    quizModel.respostaQuestao(pkUsuario, comentario, pkDebate)

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

module.exports = {
    trazerTodosDebates,
    trazerConteudoDebate,
    enviarComentarioTextoImagem
};