//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
const config = require("../../config.json");
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = (client) => {
  client.joinVoice = async () => {
    setInterval(async () => {
      client.channels.fetch(config.voiceChannel).then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator,
        });
      });
    }, 60000);
  };
};
//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
