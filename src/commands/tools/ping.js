//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Command 

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns Api & Client ping!"),

  async execute(interaction, client) {
    const ping = new EmbedBuilder()
      .setTitle("🏓 Pong!")
      .setColor("#000")
      .setTimestamp()
      .setDescription(`Api Latency : ${client.ws.ping}`);

    await interaction.reply({
      embeds: [ping],
    });
  },
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

