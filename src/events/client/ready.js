//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Colors

magenta = "\x1b[35m";
cyan = "\x1b[36m";
blue = "\x1b[34m";

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

module.exports = {
    name: "ready",
    once: "true",
    async execute(client) {

        function sleep(time) { //Sleep Function
            return new Promise((resolve) => setTimeout(resolve, time));
        }

        await sleep(1000);

        console.log( //Log UserTag & UserID
            blue,
            `[📡] Logged in as ${client.user.tag} (${client.user.id}).`
        );

        console.log(cyan, "[🖥️] Coded By Savage 0P🦠");
        //Call Functions
        //client.joinVoice();
        //client.memberCount();
        //client.statusChanger();
    },
};
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//