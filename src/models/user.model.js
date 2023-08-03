const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const User = db.define("users", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: { //! NOMBRE
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    accountNumber: { //! NUMERO DE CUENTA
        type: DataTypes.BIGINT, //? Entero mas grande
        allowNull: false,
    },
    password: { //! CONTRASEÑA
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: { //! CANTIDAD
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 1000,
    },
    status: { //! ESTADO
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

module.exports = User;