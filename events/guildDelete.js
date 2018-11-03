const Discord = require("discord.js")

exports.run = async (bot, guild) => {
  let guildCreateDelete = bot.channels.get('494789259996168192');
    let leaveEmbed = new Discord.RichEmbed()
    .setTitle("Bot left server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .setColor("#4286f4")
    .setFooter(`${bot.guilds.size} server has joined`)
    .setTimestamp();
    guildCreateDelete.send(leaveEmbed);
}
