const Discord = require('discord.js');
const admins = require("../admins.json");
const settings = require("../config.json");

module.exports.run = async (client,message,args) => {
    if (module.exports.help.admin) {
        if (admins.includes(message.author.id)) {
            var user = message.guild.member(message.mentions.users.first());
            user.addRole(settings.MuteId);
            message.reply(`${user} has been muted`);
            message.delete();
        }
        }else{

    }
}

module.exports.help = {
    name: "mute",
    description: "Mutes The User",
    admin: true,
}