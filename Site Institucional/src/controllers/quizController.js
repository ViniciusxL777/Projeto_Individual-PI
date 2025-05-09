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

    quizModel.respostaQuestao(pkUsuario, pkQuestao, resultadoQuestao)

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
    buscarQuestao,
    respostaQuestao
};