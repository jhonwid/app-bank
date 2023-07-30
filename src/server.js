require("dotenv").config();

//* Importaciones
const app = require("./app");
const { db } = require('./database/config');

//*
db.authenticate()
    .then(() => console.log("Database authenticated...😀"))
    .catch((err) => console.log(err));

db.sync({ force: false })
    .then(() => console.log("Database Synced...😁"))
    .catch((err) => console.log(err));

const PORT = 3200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}..😊`);
});