const database = require("../database/config");

function trocarImagemDePerfil(imagem, idUsuario) {
    const instrucao = `UPDATE usuario SET imagemPerfil = "${imagem}" WHERE idUsuario = ${idUsuario}`;
    return database.executar(instrucao);
}

function atualizarFotoPerfilUsuario(idUsuario) {
    const instrucao = `SELECT imagemPerfil FROM usuario WHERE idUsuario = ${idUsuario}`;
    return database.executar(instrucao);
}

module.exports = {
    trocarImagemDePerfil,
    atualizarFotoPerfilUsuario
}