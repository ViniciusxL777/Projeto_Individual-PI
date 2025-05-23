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

function buscarDadosDebate(req, res) {
    var idDebate = req.query.idDebate

    chatModel.buscarDadosDebate(idDebate)

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
    var pkUsuario = req.body.pkUsuario
    var pkDebate = req.body.pkDebate
    var comentario = req.body.comentario
    var imagem = req.file ? req.file.filename : null

    chatModel.enviarComentarioTextoImagem(pkUsuario, pkDebate, imagem, comentario)
        .then(resultado => {
            res.status(201).send("Enviada com sucesso")
        }).catch(err => {
            res.status(500).send(err);
        });
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
    buscarDadosDebate,
    enviarComentarioTextoImagem,
    cadastrarDebate
};