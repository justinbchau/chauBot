const ytdl = require('ytdl-core');

module.exports = {
  name: 'music',
  description: 'Play Music',
  async execute(message, args) {
    if (message.member.voice.channel) {
      const [command, link] = args;
      if (command === 'stop') {
        message.member.voice.channel.leave();
      } else if (command === 'play') {
        if (!link) {
          message.reply('Please provide music for me to play!');
          return;
        }
        const connection = await message.member.voice.channel.join();
        connection.play(
          ytdl(`${link}`, {
            filter: 'audioonly',
          })
        );
      }
    } else {
      message.reply('You need to join a voice channel first!');
    }
  },
};
