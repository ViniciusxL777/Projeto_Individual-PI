var perfilModel = require("../models/perfilModel")

function buscarDadosResultados(req, res) {
    var pkUsuario = req.query.pkUsuario

    perfilModel.buscarDadosResultados(pkUsuario)
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

function buscarDadosQuestoes(req, res) {
    perfilModel.buscarDadosQuestoes()
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar dadsoQuestao do usuário! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function buscarDadosQuiz(req, res) {
    var pkUsuario = req.query.pkUsuario; // Certifique-se que o nome do parâmetro bate com o frontend

    perfilModel.buscarDadosQuiz(pkUsuario)
        .then(
            function (resultado) {
                console.log("Dados do quiz retornados:", resultado);
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.error("Erro ao buscar dados do quiz:", erro);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    buscarDadosResultados,
    buscarDadosQuestoes,
    buscarDadosQuiz
};