      
// const Discord = require('discord.js');

// exports.run = async (client, message, args, tools) => {
  
//   if (!message.member.hasPermission('MANAGE_GUILD') && message.author.id !== 'ownerID') return message.channels.send('Sorry, you don\'t have permission to create poll!').then(msg => msg.delete({timeout: 10000}));
//   if (!args.join(' ')) return message.channel.send('Usage: poll <title>').then(msg => msg.delete({timeout: 10000}));
  
//   const embed = new Discord.MessageEmbed()
//     .setTitle(args.join(' '))
//     .setFooter('React to vote on Poll!')
//     .setColor('#7289DA')
//     const pollTitle = await message.channel.send({ embed });
//       await pollTitle.react(`ðŸ‘`);
//       await pollTitle.react(`ðŸ‘Ž`);
  
//     const filter = (reaction) => reaction.emoji.name === 'ðŸ‘';
//     const collector = pollTitle.createReactionCollector(filter, { time: 15000 });
//       collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
//       collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
//     const filter1 = (reaction) => reaction.emoji.name === 'ðŸ‘Ž';
//     const collector1 = pollTitle.createReactionCollector(filter1, { time: 15000 });
//       collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
//       collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
// };
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  if (args == 0) return message.channel.send("Please provide a poll topic.")

  let embed = new Discord.RichEmbed()
  .setTitle(`Poll by ${message.author.username}`)
  .setColor("#ffff00")
  .setDescription(`${args}`.split(',').join(' '));

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
     message.react("⛔")
       message.react("✅")
     }).catch(function() {
  });
};

module.exports.help = {
  name: 'poll'
};
