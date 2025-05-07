var quizModel = require("../models/perfilModel")

function buscarDadosUsuario(req, res) {
    var idUsuario = req.query.idUsuario

    quizModel.buscarDadosUsuario(idUsuario)

        .then(
            function (resultado) {
                res.json(resultado[0])
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar usuário! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function buscarDadosQuestao(req, res) {

    quizModel.buscarDadosQuestao()

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar questao! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function buscarDadosResultado(req, res) {
    var pkUsuario = req.query.pkUsuario

    quizModel.buscarDadosResultado(pkUsuario)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar os resultados do usuário! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    buscarDadosUsuario,
    buscarDadosQuestao,
    buscarDadosResultado
};