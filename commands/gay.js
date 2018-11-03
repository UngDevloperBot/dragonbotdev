const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let gay = Math.round(Math.random() * 100);

  let msguser = message.mentions.members.first();
    if (msguser) {
    var gayEmbed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setAuthor('Requested By ' + message.author.tag, message.author.avatarURL)
    .setDescription(` I think ${msguser} is ${gay}% gay.`);
    message.channel.send({embed: gayEmbed});
  } else {
    if (!msguser) {
      let gay = Math.round(Math.random() * 100);
      var gay2Embed = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor('Requested By ' + message.author.tag, message.author.avatarURL)
      .setDescription(` I think you are ${gay}% gay.`);
      message.channel.send({embed: gay2Embed});
  };
 };
}

module.exports.help = {
    name: "gay"
};
