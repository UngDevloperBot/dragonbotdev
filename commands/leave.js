const Discord = require("discord.js");
exports.run = (client, message, args, ops) => {
    
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    
    if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot isn\'t connected to the channel.');
    
    
    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you aren\'t connected to the same channel.')
    
    message.guild.me.voiceChannel.leave();
    
    const embed = new Discord.RichEmbed()
    .setDescription('✅ Successfully left channel!\n')
    .setTimestamp()
    message.channel.send(embed).then(msg=>msg.delete(1000))
    message.delete()
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
};
exports.help = {
    name: 'leave',
    description: 'Makes the bot leave the channel.',
    usage: 'leave'
};