var database = require("../database/config")

function trazerTodosDebates() {
    var instrucaoSql = `
        SELECT * FROM debate;`;
    console.log("Executando a instrução SQL: Consulta de debates \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function trazerConteudoDebate(pkDebate) {
    var instrucaoSql = `
            SELECT 
        debates.idDebate,
        comentario.idComentario,
        comentario.pkUsuario,
        usuario.nome,
        usuario.imagemPerfil,
        debates.titulo,
        comentario.comentario,
        comentario.imagem
    FROM
        debates
            JOIN
        comentarioDebate ON comentarioDebate.pkComentario = debates.idDebate
            JOIN
        comentario ON comentario.idComentario = comentarioDebate.pkComentario
            JOIN
        usuario ON usuario.idUsuario = comentario.pkUsuario
    WHERE
        comentarioDebate.pkDebate = ${pkDebate};`;
    console.log("Executando a instrução SQL: Consulta de dados dos debates \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function enviarComentarioTextoImagem(pkUsuario, pontos) {
    var instrucaoSql = `
        INSERT INTO TABELA (CAMPO) VALUES ('', '');`;
    console.log("Executando a instrução SQL: Inserção do comentarios \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    trazerTodosDebates,
    trazerConteudoDebate,
    enviarComentarioTextoImagem
}
