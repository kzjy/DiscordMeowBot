const commando = require('discord.js-commando');

class rngComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "rng",
            group: "game",
            memberName: "rng",
            description: "gives a number between 0 - 100 inclusive"
        })
    }

    async run(message, args) {
        var number = Math.floor(Math.random() * 100);
        message.channel.send("RNGesus has blessed you with : " + number);
    }
}

module.exports = rngComand;