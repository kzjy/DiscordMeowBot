const commando = require('discord.js-commando');

class playComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "play",
            group: "music",
            memberName: "play",
            description: "Play <link | search term>"
        })
    }

    async run(message, args) {
        // specifics implemented with discord.js-musicbot-addon
        // empty command here to make use of discord.js-commando ui
    }
}

module.exports = playComand;