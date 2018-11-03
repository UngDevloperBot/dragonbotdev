const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (bot, message, args) => {
     message.react("✅");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("In server", client.guilds.size)
    .setTimestamp() //This sets the timestamp.
  .setFooter(`| Requested by : ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}