const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Transfer = db.define("transfers", {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    amount: { //! CANTIDAD
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    senderUserld: { //! ID USUARIO REMITENTE
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'sender_user_id',
    },
    receiverUserld: { //! ID USUARIO RECIBIR
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'receiver_user_id',
    },
});

module.exports = Transfer;