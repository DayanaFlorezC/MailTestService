const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect');

const Email = sequelize.define('Email', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 6]
        }
    },
    partnerId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const syncModels = async () => {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error('Error al sincronizar los modeloxfds:', error);
    }
};

syncModels()

module.exports = { Email };