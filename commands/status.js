const Discord = require("discord.js");

exports.run = async (client, message, prefix) => {
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();



message.delete();
 //if(!message.member.roles.some(r=>["STATUS", "status"].includes(r.name)) )
     // return message.reply("You Need Invite 10 People To Get `STATUS` Roles To Use This Commands ! \n\nGo To #bot-command and do `--ranks` to view more role rewards !").then(msg => msg.delete(12000));
    if(!args[0]) {
       const statushelp = new Discord.RichEmbed()
       .setTitle(`__Status__: **${prefix}status < Text >**`)
        return message.channel.send(statushelp).then(msg => msg.delete(8000));
    }
    let status = args.join(" ");
    message.delete();
    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setFooter(`Status by ${message.author.username}`, message.author.avatarURL)
    .setTimestamp()

.setTitle(status)

    let m = await message.channel.send(announceEmbed);
    await m.react(`👍`);
    await m.react(`💙`);
    await m.react(`😂`);
    await m.react(`😮`);
    await m.react(`😢`);
    await m.react(`😡`);

}