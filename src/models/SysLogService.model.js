const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLogModule = require('./SysLogModule.model');

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

const SysLogService = sequelize.define('SysLogServices', SysLogServiceSchema);

SysLogService.hasMany(SysLogModule, {
	foreignKey: 'sysLogServiceId',
	sourceKey: 'sysLogServiceId'
});

module.exports = SysLogService;
