const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../config/dbConfig');

class User extends Model {}

User.init({
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: sequelize,
    modelName: 'User'
})

module.exports = User;