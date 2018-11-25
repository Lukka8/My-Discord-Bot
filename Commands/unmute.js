const Discord = require('discord.js');
const admins = require("../admins.json");
const settings = require("../config.json");

module.exports.run = async (client,message,args) => {
    if (module.exports.help.admin) {
        if (admins.includes(message.author.id)) {
            var user = message.guild.member(message.mentions.users.first());
            user.removeRole(settings.MuteId)
            message.reply(`${user} has been unmuted`)
            message.delete();
        }else{

        }
    }
}


module.exports.help = {
    name: "unmute",
    description: "Unmutes The User",
    admin: true,
}