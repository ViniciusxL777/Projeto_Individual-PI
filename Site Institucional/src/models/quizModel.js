var database = require("../database/config")

function buscarQuestao(idQuestao) {
    var instrucaoSql = `
        SELECT * FROM questao WHERE idQuestao = ${idQuestao};`;
    console.log("Executando a instrução SQL: Consulta de perguntas \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function respostaQuestao(pkUsuario, pkQuestao, resultadoQuestao) {
    var instrucaoSql = `
        INSERT INTO resposta (pkUsuario, pkQuestao, resultadoQuestao) VALUES ('${pkUsuario}', '${pkQuestao}', ${resultadoQuestao});`;
    console.log("Executando a instrução SQL: Inserção das respostas \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestao,
    respostaQuestao
}
