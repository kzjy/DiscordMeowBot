
const pref = '~';
const discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: pref
});
const music = require('discord.js-musicbot-addon');
const TOKEN = require("./token");

bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('other', 'Other');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.music = require('discord.js-musicbot-addon')
music.start(bot, {
    youtubeKey: TOKEN.YTAPI
});

/**
 * Respond to messages 
 */
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
            .setURL("https://www.reddit.com/r/me_irl/")
        message.channel.send(info);
    }
})

/**
 * Log in with secret token 
 */
bot.login(TOKEN.TOKEN);