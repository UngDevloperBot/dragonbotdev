const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async(bot, message, args) => {
    message.react("✅")
    let {body} = await snekfetch
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Hentai is art.")
    .setImage(body.url)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "hentaigif"
}
// const randomPuppy = require('random-puppy');
// const request = require('snekfetch');
// const fs = require("fs")

// exports.run = (client, message, args) => {
//     if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

//     var subreddits = [
//         'HENTAI_GIF',
//         'hentai_irl'
//     ]
//     var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

//     randomPuppy(sub)
//         .then(url => {
//             request.get(url).then(r => {
//                 fs.writeFile(`hentai.jpg`, r.body)
//                 message.channel.sendFile(r.body)
//                 fs.unlink(`./hentai.jpg`)
//             })
//         })
// }