const Discord = require('discord.js');
const prefix = ("d!")
 
exports.run = (bot, message, args) => {
message.react("✅")
  let bicon = message.author.avatarURL;
   let icon = bot.user.displayAvatarURL;
  var embed = new Discord.RichEmbed()
 .setDescription(`Hello!! I'm Dargon Bot.Under here have some Menu of commnds. Do **d!comand**`)
 .setThumbnail(icon)
 .setTitle("**Dragon Command Help**") //This is the title of the embed.
 .addField("__General :skull_crossbones:__","`" + prefix + "general`", true) //This is basically a pair of a title with content below it. The format of how it is made is how I show it to be.
 .addField("__Music :headphones:__", "`" + prefix + "music`", true)
 .addField("__Info :military_medal:__","`" + prefix + "info`", true)
 .addField('__Mods :shield:__', "`" + prefix + "mods`", true)
 .addField("__Image :frame_photo:__","`" + prefix + "image`", true)
 .addField("__Fun :joy:__", "`" + prefix + "fun`", true)
 .addField("__Game Stats :video_game:__", "`" + prefix + "gamestats`", true)
 .addField("__NSFW channel :underage:__","`" + prefix + "nsfw`", true)
 .addField("__RolePLaying :video_game:__", "`" + prefix + "autoroleplaying`", true)
 .addField("__Logging__", "`coming soon`", true)
 .addField("__Developer Bot :robot:__", "`" +prefix + "dev`", true)
 .addField("__**more information**__", "• Server Support: ╚» [click here](https://discord.gg/kNyJRV5) «╝ \n• Invite bot:   ╚» [click here](https://discordapp.com/oauth2/authorize?client_id=450933100021809171&scope=bot&permissions=2117598463) «╝\n• Website Bot ╚» [click here](https://discordbots.org/bot/450933100021809171) «╝\n• Vote Bot:   ╚» [click here](https://discordbots.org/bot/450933100021809171/vote) «╝")
 .setColor("0x86e734") //This code selects a random colour for the embed.
 .setTimestamp() //This sets the timestamp.
 .setFooter(`Requested by ${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
 return message.channel.send(embed);
 }
                
// const Discord = require('discord.js');

// exports.run = (bot, message, args) => {
//  var embed = new Discord.RichEmbed()
//  .setTitle("**Dragon Command Help**") //This is the title of the embed.
//  .addField("__General__", "`time`,`ping`,`avatar`,`luckynumber`,`randomcolor`,`roll`,`createinvite`,`quiz`,`plus`") //This is basically a pair of a title with content below it. The format of how it is made is how I show it to be.
//  .addField("__Music__","`play,skip,stop,volume,queue,pause,resume,nowplaying,join,leave,tts  or d!music `")
//  .addField("__Info__","`serverinfo`,`myinfo`,`botinfo`,`channelinfo`,`roleinfo`,`discordid`,`myname`,`username`,`online`,`fortnite`")
//  .addField('__Mods__', '`embed,say,clear,emojilist,ban,kick,autoplaying,addrole,removerole,rolecolor,nickbot,invitelist`')
//  .addField("__Image__","`cat,dog,bunny,wwe,floof,coin,magik,gif,pizza`")
//  .addField("__Fun__", "`meme,memes,pat,bond,gay,slap,status,hug,read,dadjoke,chucknorris,ascii,playdough,rps`")
//  .addField("__NSFW channel__","`pornhub,hentai,gifsex,amateur,giffuck,boobs,4k,pawg,dick,penis,pussy,asian,ass,bbw,cosplay,dicpic,public,uniform,milf`")
//  .addField("__Developer__","`setplaying,setwatching,setlistening,setstreaming,leaveserver,countserver,eval,guilname,guildinvite`")
//  .addField("__**more information**__", "• Server Support: ╚» [click here](https://discord.gg/kNyJRV5) «╝ \n• Invite bot          ╚» [click here](https://discordapp.com/oauth2/authorize?client_id=450933100021809171&scope=bot&permissions=2117598463) «╝(^_^)")
//  .setColor("0x86e734") //This code selects a random colour for the embed.
//  .setTimestamp() //This sets the timestamp.
//  .setFooter(`Requested by :${message.author.tag} `) //This sets the footer of the embed to text of your choice.
 
//  return message.channel.send(embed);
//  }
                