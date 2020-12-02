const { twitter } = require('../config.json')

module.exports = {
	name: 'twitter',
	description: 'Twitter Page',
	execute(message, args) {
		message.channel.send(`${twitter}`);
	},
};