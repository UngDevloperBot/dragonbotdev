const Discord = require("discord.js");
module.exports.run = async (bot, message, prefix ) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
 if(!args[0]) {
       const clear = new Discord.RichEmbed()
       .setTitle(`__Clear__: **d!clear <number>**`)
      
       return message.channel.send(clear).then(msg => msg.delete(8000));
    }

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you don't have permssion MANAGE_MESSAGE to use this !");
        if(!args[0]) return message.channel.send(`${prefix}clear [limit to clear]`);
        message.channel.bulkDelete(args[0]).then(() => {
       message.channel.send(`message has been clear **${args[0]}** .`).then(msg => msg.delete(2000));
    });
}
// const Discord = require("discord.js");

// module.exports.run = async (bot, message, args) => {

//   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do pal!");
//   if(!args[0]) return message.channel.send("Please specify a number.");
//   message.channel.bulkDelete(args[0]).then(() => {
//   message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
// });

// }

// module.exports.help = {
//   name: "clear"
// }