//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

require("dotenv").config();
var token = process.env.token;

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.commands = new Collection();
client.buttons = new Collection();
client.commandsArray = [];

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Handler 

const functionFolders = fs.readdirSync("./src/functions"); //Functions Folder

for (const folder of functionFolders) { //Function Handler 
    const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles) {
        require(`./src/functions/${folder}/${file}`)(client);
    }
}

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Call Handlers 

client.handleCommands();
client.handleEvents();
//client.handleComponents();

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Login 

client.login(token);