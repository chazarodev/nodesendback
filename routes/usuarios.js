const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const {check} = require('express-validator')

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'Password debe tener 6 carácteres').isLength({min: 6})
    ],
    usuarioController.nuevoUsuario
)

module.exports = router;