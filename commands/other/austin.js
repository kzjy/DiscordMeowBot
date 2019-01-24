const commando = require('discord.js-commando');
const discord = require('discord.js');

class austinComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "austin",
            group: "other",
            memberName: "austin",
            description: "Links a picture of austin kay"
        })
    }

    async run(message, args) {
        var info = new discord.RichEmbed()
            .addField("It's me", "AUSSTIN KAAAAAY", true)
            .setThumbnail(message.author.avatarURL)
            .setTitle("BOI AUSTIN")
            .setURL("https://remax-aphotos-wc.imgix.net/AccountData/150114180/austinkayPhoto.JPG");
        message.channel.send(info);
    }
}

module.exports = austinComand;