//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const connection = require("../../functions/utility/connection");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Command 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rcon")
        .setDescription("Send Command To Servers!")

        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('ban a user')
                .addStringOption(option => option.setName('server').setDescription('The server')
                    .addChoices(
                        { name: 'aim1', value: 'aim1' },
                        { name: 'aim2', value: 'aim2' },
                        { name: 'awp1', value: 'awp1' },
                    ))
                .addStringOption(option => option.setName('target').setDescription('The user'))
                .addNumberOption(option => option.setName('time').setDescription('Time to ban'))
                .addStringOption(option => option.setName('reason').setDescription('reason to ban'))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unban')
                .setDescription('ban a user')
                .addStringOption(option => option.setName('target').setDescription('The user'))
                .addNumberOption(option => option.setName('time').setDescription('Time to ban'))
                .addStringOption(option => option.setName('reason').setDescription('reason to ban'))
        ),

    async execute(interaction, client) {

        if (interaction.options.getSubcommand() === 'ban') {

            const server = interaction.options.getString('server');

          client.connect(server,"sm_plist")

        }

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

