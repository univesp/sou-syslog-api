const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLogServiceSchema = {
	sysLogServiceId: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true
	},
	sysLogService: {
		type: Sequelize.STRING(24)
	},
	sysLogServiceCreatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	},
	sysLogServiceUpdatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	}
};

module.exports = sequelize.define('SysLogModules', SysLogServiceSchema);
