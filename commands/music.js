const Discord = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
  message.react("✅")
 var embed = new Discord.RichEmbed()
 .setTitle("Music Help Menu ") //This is the title of the embed.
 .setAuthor(`d!Music 🎶🎵`, message.author.avatarURL)
 .addField("__play or p__", "`Plays a song with the given name or url.`") //This is basically a pair of a title with content below it. The format of how it is made is how I show it to be.
 .addField("__skip or s__","`Skips the currently playing song.play the next songs`")
 .addField("__stop__","`Disconnect the bot from the voice channel it is in.`")
 .addField('__volume or vol__', '`Check or change the current volume.`')
 .addField("__queue or q__","`View the queue. To view different pages, type the command with the specified page number after it (queue 2).`")
 .addField("__pause__", "`Pauses the currently playing track.`")
 .addField("__resume__","`Resume paused music.`")
 .addField("__nowplaying__","`Shows what song the bot is currently playing.`")
 .addField("__join__","`the bot to your voice channel.`")
 .addField("__leave__","`Disconnect the bot from the voice channel it is in.`")
 .addField("__**more information**__", "• Server Support: ╚» [click here](https://discord.gg/kNyJRV5) «╝ \n• Invite bot          ╚» [click here](https://discordapp.com/oauth2/authorize?client_id=450933100021809171&scope=bot&permissions=2117598463) «╝(^_^)")

 .setColor(0x86e734) //This code selects a random colour for the embed.
 .setTimestamp() //This sets the timestamp.
 .setFooter(`Requested by :${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
 return message.channel.send(embed);
 }
                