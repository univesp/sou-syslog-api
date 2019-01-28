const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLog = require('./SysLog.model');
const SysLogMobile = require('./SysLogMobile.model');

const SysLogTypesSchema = {
	sysLogTypeId: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true
	},
	sysLogType: {
		type: Sequelize.STRING(24)
	},
	sysLogTypeCreatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	},
	sysLogTypeUpdatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	}
};

const SysLogType = sequelize.define('SysLogTypes', SysLogTypesSchema);

SysLogType.hasMany(SysLog, { foreignKey: 'sysLogTypeId', sourceKey: 'sysLogTypeId' });
SysLogType.hasMany(SysLogMobile, { foreignKey: 'sysLogTypeId', sourceKey: 'sysLogTypeId' });

module.exports = SysLogType;
