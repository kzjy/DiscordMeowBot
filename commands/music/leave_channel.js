const commando = require('discord.js-commando');

class leaveChannelComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "leave",
            group: "music",
            memberName: "leave",
            description: "leave the voice channel"
        })
    }

    async run(message, args) {
        if (message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        } else {
            message.channel.send('I aint in no voice channel bud');
        }
    }
}

module.exports = leaveChannelComand;