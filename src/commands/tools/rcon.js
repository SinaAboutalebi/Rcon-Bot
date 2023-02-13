//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const { SlashCommandBuilder } = require("discord.js");
const env = require("dotenv").config();
const axios = require('axios');


//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Command 

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rcon")
        .setDescription("Send Command To Servers!")
        .addStringOption((option) =>
            option
                .setName("command")
                .setDescription("Enter your Command...")
                .setRequired(true)
        ),

    async execute(interaction, client) {

        const command = interaction.options.get("command")

        data = {
            user: interaction.user.id,
            channelid: interaction.channel.id,
            cmd: command.value
        }

        options = {
            method: 'post',
            url: 'http://api.0powerdev.ir/maxgaming/rcon/mgcommand',
            headers: {
                'authorization': process.env.AUTH,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }

        try {

            let executeCmd = await axios(options)
            if (executeCmd.status == 200) {
                await interaction.reply({
                    content: `⚙️ Executing command ${command.value} plz wait ...`,
                });
            } else {
                await interaction.reply({
                    content: `❌ Error While Executing command ${command.value}`,
                });
            }

        } catch (error) {

            if (error) {
                await interaction.reply({
                    content: `❌ Error While Executing command ${command.value}\n⚠️ Error String : ${error}`,
                });
            }

        }
    },
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

