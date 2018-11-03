const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Please write the name of a game on Steam. Example: `d!steam GTA 5`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "english", "en").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`ID of the game`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('types', results.genres)
    .addField('Price', `Normal price **${results.priceData.initialPrice}** $
Discounted price **${results.priceData.finalPrice}** $`, true)
    .addField('platforms', results.otherData.platforms, true)
    .addField('Metacritic Score', results.otherData.metacriticScore, true)
    .addField('Labels', results.otherData.features, true)
    .addField('Developers', results.otherData.developer, true)
    .addField('Publishers', results.otherData.publisher)
  .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('There was an error `' + game + '` No Game Found')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamstore',
  description: 'steamstore',
  usage: 'steamstore'
};