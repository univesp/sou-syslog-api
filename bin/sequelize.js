const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'mysql',
	port: 41890
});

sequelize.sync({ force: true }).then(() => {
	console.log(`Database & tables created!`);
});

module.exports = sequelize;
