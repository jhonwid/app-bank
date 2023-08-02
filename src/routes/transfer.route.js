//* 1. Importacion express
const express = require('express');

const transferController = require('../controllers/transfer.controller');

const router = express.Router();

router
    .route('/')
    .post(transferController.findAllTransfers);

//* Exportaciones
module.exports = router;

