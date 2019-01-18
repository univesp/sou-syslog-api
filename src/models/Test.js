const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const TestSchema = {
	hello: Sequelize.STRING
};

module.exports = sequelize.define('Test', TestSchema);
