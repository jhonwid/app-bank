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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password: { //! CONTRASEÑA
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: { //! CANTIDAD
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: { //! ESTADO
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

module.exports = User;