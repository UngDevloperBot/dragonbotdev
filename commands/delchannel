const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_ROLES")) {
      message.channel.send ("📛 You do not have permission 📛");
     // console.log("📛 You do not have permission 📛");
      return;
    }
    else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_ROLES")) {
      message.channel.send ("📛 I do not have permission📛");
     // console.log("📛 I do not have permission 📛");
      return;
}

     let channel = message.mentions.channels.first();
    if (!channel) {
      channel = message.channel;
      if (args.id) {
        channel = message.guild.channels.get(args.id);
      }
      else if (args.name) {
        channel = message.guild.channels.find('name', args.name.join(' '));
    }
    }
  if (channel[0]) {
    message.channel.send ("Veuillez spécifié un role") 
   } 
channel.delete();
  message.channel.send("Le role a etait bel et bien supprimé") 
    
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dc'],
    permLevel: 0
  };

  exports.help = {
    name: 'delchannel',
    description: 'Supprime le channel mentionné', 
    usage: 'delchannel <mention du role>'
};