const Discord = require('discord.js');

const admins = require("../admins.json");

const settings = require("../config.json");

module.exports.run = async (client,message,args) => {

    if (module.exports.help.admin) {

        if (admins.includes(message.author.id)) {

        }else{

            

            db.fetchObject(message.author.id + message.guild.id).then(i => {
                
                db.fetchObject(`userLevel_${message.author.id + message.guild.id}`).then(o => {

                    message.channel.send(`messages sent ${i.value + 1} n/level ${o.value}`)
                
                })
            })
        }
    }
}


module.exports.help = {

    name: "messages",

    description: "Kicks Player",

    admin: false,

}