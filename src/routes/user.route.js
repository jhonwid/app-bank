const express = require('express');

//Controllers
const userController = require('../controllers/user.contoller');

const router = express.Router();

router
    .route('/')
    .get(userCOntroller.findAllUsers)
    .post(userCOntroller.createUSser);

router
    .route('/:id')
    .get(userCOntroller.finOneUser)
    .patch(userCOntroller.updateUser)
    .delete(userCOntroller.deletedUser);

module.exports = userController;

