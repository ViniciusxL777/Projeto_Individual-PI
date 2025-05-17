const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
const fotoPerfilController = require('../controllers/fotoPerfilController');

router.get("", (req, res) => {
    res.render("")
});

router.post('/trocarImagemDePerfil', upload.single('foto'), (req, res) => {
    fotoPerfilController.trocarImagemDePerfil(req, res);
});

router.get('/atualizarFotoPerfilUsuario', upload.single('foto'), (req, res) => {
    fotoPerfilController.atualizarFotoPerfilUsuario(req, res);
});

module.exports = router;

