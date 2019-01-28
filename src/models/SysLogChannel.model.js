const Sequelize = require('sequelize');
const sequelize = require('../../bin/sequelize');

const SysLog = require('./SysLog.model');
const SysLogMobile = require('./SysLogMobile.model');

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

const SysLogChannel = sequelize.define('SysLogChannels', SysLogChannelSchema);

SysLogChannel.hasMany(SysLog, { foreignKey: 'SysLogChannelId', sourceKey: 'SysLogChannelId' });
SysLogChannel.hasMany(SysLogMobile, {
	foreignKey: 'SysLogChannelId',
	sourceKey: 'SysLogChannelId'
});

module.exports = SysLogChannel;
