const { youtube } = require('../config.json')


module.exports = {
	name: 'youtube',
	description: 'YouTube Channel',
	execute(message, args) {
		message.channel.send(`${youtube}`);
	},
};