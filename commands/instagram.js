const { instagram } = require('../config.json')

module.exports = {
	name: 'instagram',
	description: 'Instagram Page',
	execute(message, args) {
		message.channel.send(`${instagram}`);
	},
};