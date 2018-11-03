

const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    let coin = ['https://www.dhresource.com/0x0s/f2-albu-g4-M01-CB-6B-rBVaEFf172SADIH4AAxRIyzuR3s387.jpg/united-states-of-america-coins-liberty-head.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg']
let flip = Math.floor((Math.random() * coin.length));
let coinembed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setImage(coin[flip])
message.channel.send(coinembed)
}

module.exports.help = {
    name: "coinflip",
    description: "Flips a coin!"
}