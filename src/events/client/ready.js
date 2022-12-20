//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//

const figlet = require("figlet");
magenta = "\x1b[35m";
cyan = "\x1b[36m";
blue = "\x1b[34m";

module.exports = {
  name: "ready",
  once: "true",
  async execute(client) {
    function sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    // figlet.text(
    //   "Maxgaming",
    //   {
    //     font: "Colossal",
    //     width: 150,
    //   },
    //   function (err, data) {
    //     console.log(magenta, data);
    //   }
    // );

    await sleep(1000);

    console.log(
      blue,
      `[✅] Logged in as ${client.user.tag} (${client.user.id}).`
    );
    console.log(cyan, "[🖥️] Coded By Great0P🦠");
    client.joinVoice();
    client.memberCount();
    client.statusChanger();
    //client.pmSender();
  },
};
//---------------------------💔🚬 'Zer0Power 💔🚬---------------------------//
