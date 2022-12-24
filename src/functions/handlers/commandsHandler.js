//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const fs = require("fs");
const config = require('../../config.json');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Command Handler  

module.exports = (client) => {
    client.handleCommands = async () => {

        const commandFolders = fs.readdirSync("./src/commands"); //Commands Folder

        for (const folder of commandFolders) { //Handle Commands 
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith(".js"));

            const { commands, commandsArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandsArray.push(command.data.toJSON());
                console.log(`[ℹ️] Command : < ${command.data.name} > registered.`);
            }
        }

        const rest = new REST({ version: "10" }).setToken(process.env.token); //Application Commands API 
        try {
            console.log("[⚙️] Start refreshing application (/) commands...");

            await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), {
                body: client.commandsArray,
            });

            console.log("[✅] Successfully reloaded application (/) commands.");
        } catch (error) {
            console.error(error);
        }
    };
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//