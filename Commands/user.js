const Discord = require('discord.js');
var request = require('request');
const admins = require("../admins.json");
const settings = require("../config.json");

module.exports.run = async (client,message,args) => {
    if (module.exports.help.admin) {
        if (admins.includes(message.author.id)) {
        }
        }else{
        var user = message.mentions.users.first();
        if (user) {
            var Embed = new Discord.RichEmbed()
            .setColor(0xe328b0)
            .setTitle(`${user.username}'s Information`)
            .addField("Name",user.username)
            .addField("Bot",user.bot)
            .setThumbnail(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`)
            .setAuthor(message.author.username)
            .addField("Id",user.id)
            //.setURL(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`)
            .setFooter(user.username,`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`)
            message.channel.send(Embed);
             
        }
    }
}


module.exports.help = {
    name: "user",
    description: "Send Embed",
    admin: false,
}