const commando = require('discord.js-commando');

class joinChannelComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "join",
            group: "music",
            memberName: "join",
            description: "Join the voice channel"
        })
    }

    async run(message, args) {
        if (message.member.voiceChannel) {
            if (!message.guild.voiceConnection) {
                message.member.voiceChannel.join().then(connection => {
                    message.channel.send("I gotchu fam")
                } );
            }
        } else {
            message.channel.send("Bubby, you aint in no voice channel")
        }
    }
}

module.exports = joinChannelComand;