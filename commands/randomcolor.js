
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // Mathfunction for hex code 
    let mathFunction = "#" + Math.floor(Math.random() * 16777216).toString(16);
    let colorEmbed = new Discord.RichEmbed()
        .setColor(`${mathFunction}`)
        .addField("Color generated:", mathFunction)
         .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`);
  
    return message.channel.send(colorEmbed);
}

module.exports.help = {
    name: "randomcolor"
}
