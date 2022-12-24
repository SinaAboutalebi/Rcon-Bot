//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return;

      try {
        await command.execute(interaction, client); //Execute interaction commands
      } catch (error) {
        console.log(error);
        await interaction.deferReply({
          content: `❌ Something went wrong while executing this command...`, //Error Handler for interactions
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);

      if (!button) return new Error("There is no code for this button."); //Error Handler for buttons

      try {
        await button.execute(interaction, client); //Execute button commands
      } catch (error) {
        console.log(error);
      }
    }
  },
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
