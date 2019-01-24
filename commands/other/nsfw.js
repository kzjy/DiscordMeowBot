const commando = require('discord.js-commando');
const discord = require('discord.js');
const Scraper = require('image-scraper');

class nsfwComand extends commando.Command {
    
    constructor(client) {
        super(client, {
            name: "nsfw",
            group: "other",
            memberName: "nsfw",
            description: "nsfw <search term> ..... guess what it does"
        })
    }

    async run(message, args) {
        var site_start = 'https://luscious.net/albums/search/?q=';
        var site_end = '&search_within=%2Falbums%2Fc%2Fhentai%2Fsorted%2Fupdated%2Fpage%2F1%2F'
        var term = args.trim().replace(/ /g, "+");
        var scraper = new Scraper(site_start + term + site_end);
        var pic = 'https://vignette.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest?cb=20160730213532';
        var num = 3;
        scraper.scrape(function(image) {
            if (num != 0) {
            const embed = new discord.RichEmbed().setImage(image.address);
            message.channel.send(embed);
            num = num - 1;
            } else {
                return;
            }
            
        });
    }
}

module.exports = nsfwComand;