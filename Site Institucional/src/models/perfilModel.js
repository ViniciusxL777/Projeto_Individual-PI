var database = require("../database/config")

function buscarDadosUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT * FROM usuario WHERE idUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: Consulta de dados do usuario \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuestao() {
    var instrucaoSql = `
        SELECT * FROM questao;`;
    console.log("Executando a instrução SQL: Consulta de perguntas \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosResultado(pkUsuario) {
    var instrucaoSql = `
        SELECT * FROM resposta WHERE pkUsuario = ${pkUsuario};`;
    console.log("Executando a instrução SQL: Consulta de dados de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosUsuario,
    buscarDadosQuestao,
    buscarDadosResultado
}
