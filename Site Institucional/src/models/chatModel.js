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
        debates.idDebate
    FROM
        usuario
            JOIN
        comentario ON usuario.idUsuario = comentario.pkUsuario
            JOIN
        comentarioDebate ON comentarioDebate.pkComentario = comentario.idComentario
            JOIN
        debates ON comentarioDebate.pkDebate = debates.idDebate
    WHERE
        debates.idDebate = ${idDebate};`;
    console.log("Executando a instrução SQL: Consulta de dados dos debates \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarComentarioTextoImagem(pkUsuario, pontos) {
    var instrucaoSql = `
        INSERT INTO TABELA (CAMPO) VALUES ('', '');`;
    console.log("Executando a instrução SQL: Inserção do comentarios \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarDebate(pkUsuario, titulo) {
    var instrucaoSql = `
        INSERT INTO debates (pkUsuario, titulo) VALUES ('${pkUsuario}', '${titulo}');`;
    console.log("Executando a instrução SQL: Inserção de debate \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    trazerTodosDebates,
    buscarDadosDebate,
    enviarComentarioTextoImagem,
    cadastrarDebate
}
