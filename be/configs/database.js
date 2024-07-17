const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: process.env.DB_HOST || 'mysql',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    logging: false
});

if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_PASSWORD) {
    console.error('Missing MySQL environment variables');
    process.exit(1);
}

async function dbConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to MySQL database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the MySQL database:', error);
    }
}

module.exports = {
    sequelize,
    dbConnection
};