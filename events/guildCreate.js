const Discord = require("discord.js")

exports.run = async (bot, guild) => {
  const invite = await guild.channels.find(c => c.type !== "category" && c.position === 0).createInvite({
        maxAge: 0
    });
    let guildCreateChannel = bot.channels.get('494785643096965162');
   // guild.createChannel("bot-logs", "text");
    let joinEmbed = new Discord.RichEmbed()
    .setTitle("Bot joined server!")
    .setThumbnail(guild.iconURL)
    .addField(`Server Name:`, `${guild.name}`)
    .addField(`Server ID:`, `${guild.id}`)
    .addField(`Server Region`, `${guild.region}`)
    .addField(`Server Owner:`, `${guild.owner}`)
    .addField(`Total Mumber In This Server`, `${guild.memberCount}`)
    .addField(`Server Invite:`, `${invite.url}`)
    .setColor("#4286f4")
    .setFooter(`${bot.guilds.size} server has joined`)
    .setTimestamp();
    guildCreateChannel.send(joinEmbed);
}

