const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLogMobileSchema = {
	sysLogMobileId: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true
	},
	sysLogMobileModuleId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogMobileTypeId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogMobileChannelId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogMobileFriendlyMessage: {
		type: Sequelize.TEXT
	},
	sysLogMobileErrorCode: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileUsrId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogMobileUsrRole: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileUsrLdapUID: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileUsrLdapEmail: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileUsrLdapEduPersonAffiliation: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileDeviceBrand: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileDeviceModel: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileDeviceOSVersion: {
		type: Sequelize.STRING(128)
	},
	sysLogMobileDeviceIPAddr: {
		type: Sequelize.STRING(45)
	},
	sysLogMobileDeviceHWInfo: {
		type: Sequelize.JSON
	},
	sysLogMobileCreatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	},
	sysLogMobileUpdatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	}
};

module.exports = sequelize.define('SysLogMobile', SysLogMobileSchema);
