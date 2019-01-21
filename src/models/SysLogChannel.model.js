const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLogChannelSchema = {
	sysLogChannelId: {
		type: Sequelize.INTEGER(11),
		primaryKey: true,
		autoIncrement: true
	},
	sysLogChannel: {
		type: Sequelize.STRING(24)
	},
	sysLogChannelCreatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	},
	sysLogChannelUpdatedAt: {
		type: Sequelize.DATE,
		defautlValue: Sequelize.literal('NOW()')
	}
};

module.exports = sequelize.define('SysLogChannels', SysLogChannelSchema);
