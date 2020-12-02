const { youtube, instagram, twitter, twitch } = require('../config.json')


module.exports = {
	name: 'socials',
	description: 'Social Media Accounts',
    execute(message, args) {
        message.channel.send(`YouTube: ${youtube}\n\nInstagram: ${instagram}\n\nTwitter: ${twitter}\n\nTwitch: ${twitch}`);
	},
};