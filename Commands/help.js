const Discord = require('discord.js');
const admins = require("../admins.json");
const settings = require("../config.json");
const fs = require('fs')

module.exports.run = async (client,message,args) => {
    fs.readdir('./Commands/',(err,file) => {
        if (err) {
            console.log(err)
            return;
        }

        let isfiles = file.filter(f => f.split(".").pop() === "js");
    
        if(isfiles.length <= 0) {
            console.log("no command found")
            return;
        }
    
        isfiles.forEach((f) => {
            let props = require(`./Commands/${f}`);
            var Embed = new Discord.RichEmbed()
                .setTitle("Commands")
                .setFooter(`prefix : ${settings.prefix}`)
                .addField(props.help.name,props.help.description)
            message.channel.send(Embed);
        })
    })
}


module.exports.help = {
    name: "help",
    description: null,
    admin: false,
}