const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require('fs');

client.commands = new Discord.Collection();

client.on('ready', function (evt) {
    console.log("Bot has started");
    console.log(client.commands);
});

fs.readdir('./Commands/',(err,files) => {
    if(err) {
        console.log(err)
        return;
    }

    let isfiles = files.filter(f => f.split(".").pop() === "js");

    if(isfiles.length <= 0) {
        console.log("no command found")
        return;
    }
    
    console.log(`Loading ${isfiles.length} command!`)

    isfiles.forEach((f,i) => {
        let props = require(`./Commands/${f}`);
        console.log(`${i + 1} ${f} loaded!`);
        client.commands.set(props.help.name,props);
    })
})


client.on('message', async message => {
    if (message.author.bot) {
        return;
    }

    if (message.member.roles.has(config.MuteId)) {
        message.delete();
        return;
    }

    let MessageArray = message.content.split(/\s+/g);
    let command = MessageArray[0];
    let args = MessageArray.slice(1);

    if (command.startsWith(config.prefix)) {

        let cmd = client.commands.get(command.slice(config.prefix.length));
        
        if (cmd) {
           cmd.run(client,message,args);
        }
    }
});

client.login(process.env.BOT_TOKEN);
