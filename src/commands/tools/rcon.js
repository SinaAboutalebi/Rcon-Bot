//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const { SlashCommandBuilder } = require("discord.js");
const env = require("dotenv").config();
const fetch = require('node-fetch');


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
            channelID: interaction.channel.id,
            cmd: command.value,
            auth: process.env.AUTH

        }

        options = {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        try {

            let executeCmd = await fetch(`http://127.0.0.1:5698/api/command`, options)
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
                    content: `❌ Error While Executing command ${command.value}`,
                });
            }

        }





    },
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

