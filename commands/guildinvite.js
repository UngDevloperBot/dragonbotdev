const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {
    if (message.author.id !== ('424916247696900135')) return message.channel.send("**You Can\'t Use This command**");
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Enter a valid guild id`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
module.exports.help = {
    name: "getinvite"
}


//AND YOU MUST HAVE THE ID OF THE SERVER.
//This is a new event
client.on("guildCreate", guild => {
    let guildCreate = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField("Someone added my bot, server name:", guild.name) 
    .addField("And their id was:", guild.owner.id)
    .addField("With guild ID: ", guild.id)
    
    client.users.get("424916247696900135").send(guildCreate)
  });