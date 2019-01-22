const commando = require('discord.js-commando');
const discord = require('discord.js');

class meComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "me",
            group: "other",
            memberName: "me",
            description: "Description about me, the bot "
        })
    }

    async run(message, args) {
        let pic = bot.user.displayerAvatarURL;
        var info = new discord.RichEmbed()
            .setField("The story of me, the bot", "I'm a discord bot created by the great Kelvin-Sama", true)
            .setColor(0xD2A3E9)
            .setThumbnail(pic)
            .setTitle("About Meow-Bot")
            .setURL("https://remax-aphotos-wc.imgix.net/AccountData/150114180/austinkayPhoto.JPG")
    }
}

module.exports = meComand;