const Discord = require('discord.js');
var request = require('request');
const admins = require("../admins.json");
const settings = require("../config.json");

module.exports.run = async (client,message,args) => {
    if (module.exports.help.admin) {
        if (admins.includes(message.author.id)) {
        request('https://devoflua.github.io/welcone.json', function (error,response,body) {
            var Embed = new Discord.RichEmbed()
            .setColor(body.Color)
            .setAuthor(body.Creator)
            .setDescription(body.Description)
            .setImage(body.Image)
            .setTitle(body.Title)
            .setURL(body.Url)
            message.channel.send(Embed);
            });
            }else{
            message.reply(settings.admin_command);
        }
    }
}


module.exports.help = {
    name: "embed",
    description: "Send Embed",
    admin: true,
}