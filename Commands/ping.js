const Discord = require('discord.js');

const admins = require("../admins.json");

const settings = require("../config.json");

module.exports.run = async (client,message,args) => {

    if (module.exports.help.admin) {

        if (admins.includes(message.author.id)) {

            const m = await message.channel.send("Ping?");

            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)

            message.delete();

        }else{

            const m = await message.channel.send("Ping?");

            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)

            message.delete();

        }
        
        }else{
        
            const m = await message.channel.send("Ping?");

            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)

            message.delete();
    }
}


module.exports.help = {
    name: "ping",
    description: "deletes messages by providing number between 2 and 100",
    admin: false,
}