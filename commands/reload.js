
//const ownerID = '424916247696900135'

const Discord = require('discord.js')

exports.run = (client, message, args) => {
  
    var authors = ["424916247696900135"];
    if(!authors.includes(message.author.id)) return;
  
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};
