//Connection à la base de données
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize(`mysql://${process.env.BDD_USER}:${process.env.BDD_PWD}@localhost:3306/groupomania`)
async function initDB() {
    try {
        await sequelize.authenticate();
        console.log('Base de données connectée !');
    } catch (error) {
        console.error(error);
    }
}

module.exports = {sequelize, initDB};