const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

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

module.exports = sequelize.define('SysLogTypes', SysLogTypesSchema);
