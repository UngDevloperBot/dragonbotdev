
const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
        
  const channelinfo = message.guild.channels.map(c => `${c.name} : ${c.id}`)
  
    
  
  //let role = new Discord.RichEmbed()
  //  .setTitle('')
    //.setColor("RANDOM")
   // .addField('Role of this server with ID', `\`\`\`${roleinfo.join("\n")}\`\`\``)
   // .setFooter(`${client.user.tag}`) //FOOTER AND ICON
   // .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!
  // .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
 
 message.channel.send(`\`\`\`${channelinfo.join("\n")}\`\`\``)
  message.react("✅");
}

