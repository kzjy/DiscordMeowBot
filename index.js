const Commando= require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: '~'
});
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

/**
 * Respond to commandPrefix me 
 */
bot.on('message', message => {
    if (message.content == bot.commandPrefix + 'me') {
        let pic = bot.user.displayAvatarURL;
        var info = new discord.RichEmbed()
            .addField("The story of me, the bot", "I'm a discord bot created by the great Kelvin-Sama", true)
            .setColor(0xD2A3E9)
            .setThumbnail(pic)
            .setTitle("About Meow-Bot")
            .setURL("https://remax-aphotos-wc.imgix.net/AccountData/150114180/austinkayPhoto.JPG")
        message.channel.send(info);
    }
})

/**
 * Log in with secret token 
 */
bot.login(TOKEN.TOKEN);