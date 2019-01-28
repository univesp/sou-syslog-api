const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLog = require('./SysLog.model');
const SysLogMobile = require('./SysLogMobile.model');
const SysLogService = require('./SysLogService.model');

const SysLogModuleSchema = {
	sysLogModuleId: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true
	},
	sysLogServiceId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogModule: {
		type: Sequelize.STRING(24)
	},
	sysLogModuleCreatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	},
	sysLogModuleUpdatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	}
};

const SysLogModule = sequelize.define('SysLogModules', SysLogModuleSchema);

SysLogModule.hasMany(SysLog, { foreignKey: 'sysLogModuleId', sourceKey: 'sysLogModuleId' });
SysLogModule.hasMany(SysLogMobile, { foreignKey: 'sysLogModuleId', sourceKey: 'sysLogModuleId' });
SysLogModule.belongsTo(SysLogService, {
	foreignKey: 'sysLogServiceId',
	targetKey: 'sysLogServiceId'
});

module.exports = SysLogModule;
