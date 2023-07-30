//* Importacion
const express = require('express');

//* Rutas Variables
const userRoute = require('./routes/user.route');
const transferRoute = require('./routes/transfer.route');

const app = express();

app.use(express.json());

//* Rutas
app.use('/api/v1/users', userRoute);
app.use('/api/v1/transfers', transferRoute);

//* Exportaciones
module.exports = app;