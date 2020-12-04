const ytdl = require('ytdl-core');

module.exports = {
  name: 'music',
  description: 'Play Music',
  async execute(message, args) {
    if (message.member.voice.channel) {
      const [command, link] = args;
      // Command to stop the music and remove bot
      if (command === 'stop') {
        message.member.voice.channel.leave();
        // Command to play music from link that is given in the args
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
      // if no command is given, throw error
    } else {
      message.reply('You need to join a voice channel first!');
    }
  },
};
