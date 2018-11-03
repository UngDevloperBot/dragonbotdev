const Discord = require('discord.js');
exports.run = (client, message, args) => {
 message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`**
        Inviter: ${inv.inviter} 
        Invite link: ${inv.url} 
        Invite code: ${invs[inv.code]};**                  `);
   
    
    
    
    
    
    
    
  });
  var embed = new Discord.RichEmbed()
  .setColor("#f3ae10")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/avatars/465993722342014986/5200cef5b7d86626c9f97c9c3c8e3335.png?size=2048")
           message.channel.send({ embed: embed });
   
  });
   
}