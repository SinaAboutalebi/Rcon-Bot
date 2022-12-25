//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const rcon = require("rcon");
const config = require('../../config.json');

require("dotenv").config();
var password = process.env.pass;


//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Rcon Connection 

module.exports = (client) => {
    client.connect = async (server, cmd) => {


        console.log(server, cmd);

        switch (server) {
            case "aim1":
                ip = config.servers.aim1.ip
                port = config.servers.aim1.port
                break;
            case "aim2":
                ip = config.servers.aim2.ip
                port = config.servers.aim2.port
                break;
            case "awp1":
                ip = config.servers.awp1.ip
                port = config.servers.awp1.port
                break;
            case "pub1":
                ip = config.servers.pub1.ip
                port = config.servers.pub1.port
                break;
            case "pub2":
                ip = config.servers.pub2.ip
                port = config.servers.pub2.port
                break;
            case "pub3":
                ip = config.servers.pub3.ip
                port = config.servers.pub3.port
                break;
            case "pub4":
                ip = config.servers.pub4.ip
                port = config.servers.pub4.port
                break;
            case "pub5":
                ip = config.servers.pub5.ip
                port = config.servers.pub5.port
                break;
            case "pub6":
                ip = config.servers.pub6.ip
                port = config.server.pub6.port
                break;

            default:
                break;
        }

        console.log(ip, port, password);
            try {
                let connection = new rcon(ip, port, password);

                connection.on("auth", async function () {
                    console.log("connected");
                });
                connection.on("end", function () {
                    console.log("end");

                });
                connection.on("error", function (err) {
                    console.log(error);
                });


                connection.send(cmd.toString())
                return connection;

            } catch (error) {
                console.log(error)
            }

            connection.on("response", async (str) => {
                console.log(str);
            })
    };
};
//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//