const { twitch } = require('../config.json')

module.exports = {
	name: 'twitch',
	description: 'Twitch Channel',
	execute(message, args) {
		message.channel.send(`${twitch}`);
	},
};