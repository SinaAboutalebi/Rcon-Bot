//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
const config = require("../../config.json");
const axios = require("axios");
const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.statusChanger = async () => {
    async function getServerData() {
      const empty = { totalPlayers: "null", totalServers: "null" };
      const options = {
        method: "get",
        url: "http://api.0powerdev.ir/maxgaming/serverdata/counts",
      };
      let serverData = await axios(options).catch((error) => {
        console.log(error);
        return empty;
      });

      if (!serverData.data) {
        return empty;
      } else {
        return serverData.data;
      }
    }

    setInterval(async () => {
      try {

        const serverData = await getServerData();
        const totalPlayers = serverData.totalPlayers;
        const totalServers = serverData.totalServers;

      

      const maxgaming = await client.guilds.fetch(config.guildId);
      const memberCount = maxgaming.memberCount;

      const status = [
        `ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍᴀxɢᴀᴍɪɴɢ.ɪʀ | /rcon`,
        `ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ 🤍🍷'ᴢᴇʀ𝟶ᴘᴏᴡᴇʀ | /rcon`,
        `🔥 ᴅɪsᴄᴏʀᴅ ᴍᴇᴍʙᴇʀs : ${memberCount} | /rcon`,
        `📡 sᴇʀᴠᴇʀs ᴏɴʟɪɴᴇ : ${totalServers} | /rcon`,
        `🔫 ᴘʟᴀʏᴇʀs ᴏɴʟɪɴᴇ : ${totalPlayers} | /rcon`,
      ];

      const randomStatus = Math.floor(
        Math.random() * Math.floor(status.length)
      );

      client.user.setStatus("idle");
      client.user.setActivity(status[randomStatus], {
        type: ActivityType.Watching,
      });
      } catch (err) { 
        if(err) return err;
      }

    }, 20000);
    
  };
};
//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
