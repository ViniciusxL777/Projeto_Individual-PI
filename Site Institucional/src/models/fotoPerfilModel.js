const database = require("../database/config");

function trocarImagemDePerfil(usuario) {
    const instrucao = `UPTADE usuario SET imagemPerfil = ${imagemPerfil}`;

    return database.executar(instrucao);
}

function atualizarFotoPerfilUsuario(idUsuario) {
    const instrucao = `select * from usuario where idUsuario = ${idUsuario}`;

    return database.executar(instrucao);
}

module.exports = {
    trocarImagemDePerfil,
    atualizarFotoPerfilUsuario
}