const commando = require('discord.js-commando');

class pauseComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "pause",
            group: "music",
            memberName: "pause",
            description: "Pause the current song"
        })
    }

    async run(message, args) {
        // specifics implemented with discord.js-musicbot-addon
        // empty command here to make use of discord.js-commando ui
    }
}

module.exports = pauseComand;