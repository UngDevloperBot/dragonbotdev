const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
  // let logs = message.guild.channels.find("name", "mods-log");
  // if(!logs) return message.channel.send("** :x: | Could not find a **mods-log** channel.**");

   if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {//!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || 
            return message.channel.send(' :x: |** You dont have enough permissions!**');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.channel.send("** :warning: | You have to mention a user/player.**")
            return;
        }

    if(!member.voiceChannel){
    message.channel.send("** :x: | I can't find this player in any voice channel.**")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        
      });
    });
}