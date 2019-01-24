const commando = require('discord.js-commando');
const discord = require('discord.js');

class meComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "me",
            group: "other",
            memberName: "me",
            description: "Gives basic info about bot"
        })
    }

    async run(message, args) {
        // Empty command, content in index.js so bot can be referenced
    }
}

module.exports = meComand;