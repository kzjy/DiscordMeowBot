const Discord = require('discord.js-commando');
const bot = new Discord.Client();
const TOKEN = require("./token");

bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('other', 'Other');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on('message', function(message) {
    if (message.content.toLowerCase() == 'hello') {
        message.channel.send('Hello ' + message.author);
    } else if (message.content.toLowerCase() == 'squish') {
        message.channel.send('Maggie has been squished, nyaaa');
    }
});
bot.login(TOKEN.TOKEN);