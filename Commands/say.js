const Discord = require('discord.js');
var request = require('request');
const admins = require("../admins.json");
const settings = require("../config.json");

module.exports.run = async (client,message,args) => {
    if (module.exports.help.admin) {
        if (admins.includes(message.author.id)) {
            message.channel.send(args);
            message.delete();
        }else{
            message.reply(settings.admin_command);
        }
    }
}


module.exports.help = {
    name: "say",
    description: "Send Embed",
    admin: true,
}