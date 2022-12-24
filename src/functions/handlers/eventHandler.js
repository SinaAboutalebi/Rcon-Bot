//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages 

const fs = require("fs");

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

module.exports = (client) => {
    client.handleEvents = async () => {

        const eventFolders = fs.readdirSync("./src/events"); //Event Folders

        for (const folder of eventFolders) { //Handle Events 
            const eventFiles = fs
                .readdirSync(`./src/events/${folder}`)
                .filter((file) => file.endsWith(".js"));

            switch (folder) {
                case "client":
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        if (event.once)
                            client.once(event.name, (...args) =>
                                event.execute(...args, client)
                            );
                        else
                            client.on(event.name, (...args) =>
                                event.execute(...args, client)
                            );
                    }
                    break;

                default:
                    break;
            }
        }
    };
};

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//