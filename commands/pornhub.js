const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const query = args.join(' ')
    if (!query) return message.channel.send("Usage: d!pornhub <search query>")
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.").then(message => message.delete(5000))
    message.delete().catch(O_o=>{});
    const Pornsearch = require('pornsearch').search(query);
        Pornsearch.gifs(1)
            .then(gifs => {
                let gifrnd = gifs.map(gif => gif.url)
                let embed = new Discord.RichEmbed()
                    .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                message.channel.send({
                    embed: embed
                })
            })
}