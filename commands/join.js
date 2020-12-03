module.exports = {
  name: 'join',
  description: 'Join Channel',
  async execute(message, args) {
    if (message.member.voice.channel) {
      await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  },
};
