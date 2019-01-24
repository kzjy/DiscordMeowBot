const commando = require('discord.js-commando');

class queueComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "queue",
            group: "music",
            memberName: "queue",
            description: "Display current queue"
        })
    }

    async run(message, args) {
        // specifics implemented with discord.js-musicbot-addon
        // empty command here to make use of discord.js-commando ui
    }
}

module.exports = queueComand;