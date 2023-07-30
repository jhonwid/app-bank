const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Transfer = db.define("transfers", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    date: {
        define: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = User;