const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLogSchema = {
	sysLogId: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true
	},
	sysLogModuleId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogTypeId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogChannelId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogFriendlyMessage: {
		type: Sequelize.TEXT
	},
	sysLogErrorCode: {
		type: Sequelize.STRING(128)
	},
	sysLogUsrId: {
		type: Sequelize.INTEGER(11)
	},
	sysLogUsrLogin: {
		type: Sequelize.STRING(128)
	},
	sysLogUsrEmail: {
		type: Sequelize.STRING(191)
	},
	sysLogUsrRole: {
		type: Sequelize.STRING(128)
	},
	sysLogUsrLdapUID: {
		type: Sequelize.STRING(128)
	},
	sysLogUsrLdapEmail: {
		type: Sequelize.STRING(128)
	},
	sysLogUsrLdapEduPersonAffiliation: {
		type: Sequelize.STRING(128)
	},
	sysLogServerHttpReferer: {
		type: Sequelize.TEXT
	},
	sysLogServerHttpUserAgent: {
		type: Sequelize.TEXT
	},
	sysLogServerRemoteAddr: {
		type: Sequelize.STRING(45)
	},
	sysLogCreatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	},
	sysLogUpdatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	}
};

module.exports = sequelize.define('SysLog', SysLogSchema);
