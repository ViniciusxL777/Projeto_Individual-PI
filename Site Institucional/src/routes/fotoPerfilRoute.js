const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload');
const fotoPerfilController = require('../controllers/fotoPerfilController');

router.post('/trocarImagemDePerfil', upload.single('foto'), (req, res) => {
    fotoPerfilController.trocarImagemDePerfil(req, res)
})

router.get("/atualizarFotoPerfilUsuario", function (req, res) {
    fotoPerfilController.atualizarFotoPerfilUsuario(req, res)
})

module.exports = router;