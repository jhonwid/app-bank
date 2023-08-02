const { Sequelize } = require("sequelize");

// console.log(process.env.DB_DIALECT); //? Validar datos 

const db = new Sequelize({
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    logging: false,
});

module.exports = { db };