const usuarioModel = require('../models/fotoPerfilModel');


function trocarImagemDePerfil(req, res) {
    const imagem = req.file.filename;

    const { nome, email } = req.body

    const usuario = { nome, email, imagem }

    usuarioModel.trocarImagemDePerfil(usuario)
        .then(resultado => {
            res.status(201).send("Usuario criado com sucesso");
        }).catch(err => {
            res.status(500).send(err);
        });
}

function atualizarFotoPerfilUsuario(req, res) {
    idUsuario = req.body.idUsuario
    fotoPerfil = req.params.id
    usuarioModel.atualizarFotoPerfilUsuario(req.params.id)
        .then(resultado => {
            res.json(resultado);
        }).catch(err => {
            res.status(500).send(err);
        });
}

module.exports = {
    trocarImagemDePerfil,
    atualizarFotoPerfilUsuario
}