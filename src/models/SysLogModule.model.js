const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

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

module.exports = sequelize.define('SysLogModules', SysLogModuleSchema);
