//* Importacion
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');

//* Rutas 
const userRoute = require('./routes/user.route');
const transferRoute = require('./routes/transfer.route');

const app = express();

//*
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') { //? Configuracion de varibles de entorno ENV
    app.use(morgan('dev')); //? Configuracion de varibles de entorno ENV
}; //? Configuracion de varibles de entorno ENV

//* Rutas 
app.use('/api/v1/users', userRoute);
app.use('/api/v1/transfers', transferRoute);

//* Exportaciones
module.exports = app;