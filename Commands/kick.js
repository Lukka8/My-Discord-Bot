const Discord = require('discord.js');

const admins = require("../admins.json");

const settings = require("../config.json");

module.exports.run = async (client,message,args) => {

    if (module.exports.help.admin) {

        if (admins.includes(message.author.id)) {

            var user = message.mentions.members.first() || message.guild.members.get(args[0]);

            if (!user) {

                message.reply(settings.not_valid_member);

                return;

            }


            if (!user.kickable) {

                message.reply(settings.not_kicked);

                return;

            }

            let reason = args.slice(1).join(' ');

            if(!reason) reason = "No reason provided";

            user.kick(reason) 

            message.reply(`${user.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

        }else{

            message.reply(settings.admin_command)

        }
    }
}


module.exports.help = {

    name: "kick",

    description: "Kicks Player",

    admin: true,

}