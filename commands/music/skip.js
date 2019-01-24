const commando = require('discord.js-commando');

class skipComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "skip",
            group: "music",
            memberName: "skip",
            description: "Skip the current song, Skip [number] to skip multiple songs"
        })
    }

    async run(message, args) {
        // specifics implemented with discord.js-musicbot-addon
        // empty command here to make use of discord.js-commando ui
    }
}

module.exports = skipComand;