var database = require("../database/config")

function trazerTodosDebates() {
    var instrucaoSql = `
        SELECT * FROM debates;`;
    console.log("Executando a instrução SQL: Consulta de debates \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosDebate(idDebate) {
    var instrucaoSql = `
    SELECT 
        usuario.nome,
        usuario.imagemPerfil,
        comentario.comentario,
        comentario.imagem,
        comentario.idComentario,
        debates.idDebate,
        debates.titulo
    FROM
        comentario
            JOIN
        usuario ON comentario.pkUsuario = usuario.idUsuario
            JOIN
        debates ON comentario.pkDebate = debates.idDebate
    WHERE 
        debates.idDebate = ${idDebate};`
    console.log("Executando a instrução SQL: Consulta de dados dos debates \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function enviarComentarioTextoImagem(pkUsuario, pkDebate, imagem, comentario) {
    var instrucaoSql = `
        INSERT INTO comentario (pkUsuario, pkDebate, comentario, imagem) VALUES ('${pkUsuario}','${pkDebate}','${comentario}','${imagem}');`;
    console.log("Executando a instrução SQL: Inserção do comentarios \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarDebate(pkUsuario, titulo) {
    var instrucaoSql = `
        INSERT INTO debates (pkUsuario, titulo) VALUES ('${pkUsuario}', '${titulo}');`
    console.log("Executando a instrução SQL: Inserção de debate \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

module.exports = {
    trazerTodosDebates,
    buscarDadosDebate,
    enviarComentarioTextoImagem,
    cadastrarDebate
}
