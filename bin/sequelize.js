const Sequelize = require('sequelize');

const { env } = process;

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
	host: env.DB_HOST,
	dialect: 'mysql',
	port: env.DB_PORT || 3306
});

module.exports = sequelize;
