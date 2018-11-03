module.exports.run = (client, message, args) => {
        if (message.author.id !== ('424916247696900135')) return message.channel.send("**You Can\'t use this command!!! **");
     
  // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }

module.exports.help = {
    name: "guilds"
}