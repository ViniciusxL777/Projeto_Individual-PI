const { request } = require("express");
var database = require("../database/config")

function buscarQuestao(idQuestao) {
    var instrucaoSql = `
        SELECT * FROM questao WHERE idQuestao = ${idQuestao};`;
    console.log("Executando a instrução SQL: Consulta de perguntas \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function respostaQuestao(pkUsuario, pkQuestao, resultadoQuestao, pontosQuestao) {
    var instrucaoSql = `
        INSERT INTO resposta (pkUsuario, pkQuestao, resultadoQuestao, pontosQuestao) VALUES ('${pkUsuario}', '${pkQuestao}', '${resultadoQuestao}', '${pontosQuestao}');`;
    console.log("Executando a instrução SQL: Inserção das respostas \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontosQuiz(pkUsuario, pontos) {
    var instrucaoSql = `
        INSERT INTO quiz (pkUsuario, pontos) VALUES ('${pkUsuario}', '${pontos}');`;
    console.log("Executando a instrução SQL: Inserção dos pontos do quiz \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestao,
    respostaQuestao,
    pontosQuiz
}
