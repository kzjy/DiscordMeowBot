const commando = require('discord.js-commando');

class leaveChannelComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "leave",
            group: "music",
            memberName: "leave",
            description: "Leave the voice channel"
        })
    }

    async run(message, args) {
        // specifics implemented with discord.js-musicbot-addon
        // empty command here to make use of discord.js-commando ui
    }
}

module.exports = leaveChannelComand;