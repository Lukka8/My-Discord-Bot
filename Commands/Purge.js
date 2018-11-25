const Discord = require('discord.js');
const admins = require("../admins.json");
const settings = require("../config.json");

module.exports.run = async (client,message,args) => {
    if (module.exports.help.admin) {
        if (admins.includes(message.author.id)) {
            const deleteCount = parseInt(args[0], 10);
            

            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            
                return message.reply(settings.low_number);
            

            const fetched = await message.channel.fetchMessages({count: deleteCount});
            
            message.channel.bulkDelete(fetched)
            .catch(error => message.reply(settings.message_delete_error + ` : ${error}`));
            }else{
            message.reply(settings.admin_command);
        }
    }
}


module.exports.help = {
    name: "purge",
    description: "deletes messages by providing number between 2 and 100",
    admin: true,
}