const Sequelize = require('sequelize');

const connection = new Sequelize('bd5s','root','12345678',{
    host: '35.198.50.240',
    //host: 'localhost',
    port: 3306,
    dialect: 'mysql'
}); 

module.exports = connection;
