const express = require('express');

//* 2. Importaciones 
const userController = require('../controllers/user.contoller'); //? Controller
const userMiddleware = require('./../middlewares/user.middleware'); //? Middleware

const router = express.Router();

//* Rutas de los controladores
router.post('/signup', userController.signUp);

router.post('/login', userMiddleware.valideUser, userController.login);

//* Exportaciones
module.exports = router;

