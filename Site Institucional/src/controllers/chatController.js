var chatModel = require("../models/chatModel")

function trazerTodosDebates(req, res) {

    chatModel.trazerTodosDebates()
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
    var idDebate = req.query.idDebate

    chatModel.trazerConteudoDebate(idDebate)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar dados debates! Erro: "
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

    chatModel.enviarComentarioTextoImagem(pkUsuario, comentario, pkDebate)

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

function cadastrarDebate(req, res) {
    var pkUsuario = req.body.pkUsuarioServer
    var titulo = req.body.tituloServer

    chatModel.cadastrarDebate(pkUsuario, titulo)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao cadastrar seu debate! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    trazerTodosDebates,
    trazerConteudoDebate,
    enviarComentarioTextoImagem,
    cadastrarDebate
};