const Discord = require("discord.js");

module.exports.run = async (bot, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
message.react("✅")
var images = ["https://cdn.discordapp.com/attachments/452115003659780096/460348810237837312/image.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460348937887285248/image.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460348845508001804/image.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460336145775984650/giphy.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460338481076633611/love_1.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460348864239763456/image.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460341341541367810/love_you.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460339941482823680/love_2.gif", "https://cdn.discordapp.com/attachments/452115003659780096/460338558209753088/love_2.gif"];
     var rand = Math.floor(Math.random() * images.length);
     var randomImage = images[rand];

     const patEmb = new Discord.RichEmbed()
    .setColor(0xA901DB)
    .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
   .setColor(0xA901DB)
   .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
   if(!args[0]) {
    message.channel.send(`<@${message.author.id}> **has love** <@${message.author.id}>..Oh Wait You Can\'t Pay Yourself : Please Pat User » d!love @user`, {embed: sadEmb});
    return;
  }

  if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
      msg.delete(3000)
    });
  message.channel.send(`<@${message.author.id}> **has love** ${args[0]}`, {embed: patEmb});

}