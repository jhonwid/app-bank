//* 1. Importacion express
const express = require('express');

//* 2. Importacion
const userController = require('../controllers/user.contoller');

const router = express.Router();

//* Rutas de las funciones asincronas
router
    .route('/')
    // .post(userController.findAllUsers)
    .post(userController.singupUser)
    .post(userController.loginUser);

router
    .route('/:id')
    .get(userController.historyUser)

//* Exportaciones
module.exports = router;

