const fotoPerfilModel = require('../models/fotoPerfilModel');

function trocarImagemDePerfil(req, res) {
    var imagem = req.file.filename;
    var idUsuario = req.body.idUsuario;

    fotoPerfilModel.trocarImagemDePerfil(imagem, idUsuario)
        .then(resultado => {
            res.status(201).send("Imagem de perfil atualizada com sucesso");
        }).catch(err => {
            console.error(err);
            res.status(500).send("Erro ao atualizar imagem de perfil");
        });
}

function atualizarFotoPerfilUsuario(req, res) {
    var idUsuario = req.query.idUsuario;

    fotoPerfilModel.atualizarFotoPerfilUsuario(idUsuario)
        .then(resultado => {
            res.status(200).json(resultado[0]);
        }).catch(erro => {
            console.error(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    trocarImagemDePerfil,
    atualizarFotoPerfilUsuario
}