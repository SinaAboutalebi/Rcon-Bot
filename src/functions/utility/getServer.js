//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Packages

const config = require('../../config.json');

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//
//Servert Detection
module.exports = (channelid) => {

data = {} //Define Empty Data Block

    //Get Server Ip Port Based On Channel ID================================//
    switch (channelid) {
        case "937410276989501440":
            data.ip = config.aim1.ip
            data.port = config.aim1.port
            data.label = "aim1"
            break;
        case "937410932198490122":
            data.ip = config.aim2.ip
            data.port = config.aim2.port
            data.label = "aim2"
            break;
        case "937410979204051014":
            data.ip = config.awp1.ip
            data.port = config.awp1.port
            data.label = "awp1"
            break;
        case "937411018655682580":
            data.ip = config.pub1.ip
            data.port = config.pub1.port
            data.label = "pub1"
            break;
        case "937411058715471912":
            data.ip = config.pub2.ip
            data.port = config.pub2.port
            data.label = "pub2"
            break;
        case "937411074557366322":
            data.ip = config.pub3.ip
            data.port = config.pub3.port
            data.label = "pub3"
            break;
        case "937411089543593984":
            data.ip = config.pub4.ip
            data.port = config.pub4.port
            data.label = "pub4"
            break;
        case "937411104567619744":
            data.ip = config.pub5.ip
            data.port = config.pub5.port
            data.label = "pub5"
            break;
        case "1026977972491657266":
            data.ip = config.pub6.ip
            data.port = config.pub6.port
            data.label = "pub6"
            break;
        case "937411212151513098":
            data.ip = config.admin.ip
            data.port = config.admin.port
            data.label = "admin mix"

        default:
            data = { error: "could'nt find any server by this channelid" } //Return Error
    }

    return data; //Return Data Block
}

//---------------------------🤍🍷 'Zer0Power 🍷🤍---------------------------//