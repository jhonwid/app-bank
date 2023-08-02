require("dotenv").config(); //? Configuracion de varibles de entorno .env

//* Importaciones
const app = require("./app");
const { db } = require('./database/config');

//* Base de Datos configuracion
db.authenticate() //? Auttenticacion con la base de datos
    .then(() => console.log("Database authenticated...😀"))
    .catch((err) => console.log(err));

db.sync({ force: false }) //? Sincronizacion con la base de datos
    .then(() => console.log("Database Synced...😎"))
    .catch((err) => console.log(err));

//* Puerto configuracion con DotEnv
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...🤙`);
});