const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();// Declaration of constants to make the pinging system function.
const db = require("quick.db")
const figlet = require("figlet")
const fs = require("fs");
const prefix = 'd!'; //This creates your prefix, which you put before a message to send a command.
const ownerID = '424916247696900135'
const snekfetch = require("snekfetch")

client.on("ready", () => { 
console.log("ONLINE"); 
let onlinelogs = client.channels.get("479350364701851668");//<#479350364701851668>logs bot online
  
  let online = new Discord.RichEmbed()
    .setTitle('Bot is Online')
    .setColor("RANDOM")
    .addField('Bot has restarted,', ` with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
    .setFooter(`${client.user.tag}`) //FOOTER AND ICON
    .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!
  // .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  onlinelogs.send(online);

}); 



app.get("/", (request, response) => {
 console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 36000); //Pinging system.

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, Discord, prefix, );
   //console.log(`----------------\nCommand: ${command}\nRan by: ${message.author.tag}\n----------------`)
	let guildCreateDelete = client.channels.get("478175364296736768");
  
  let log = new Discord.RichEmbed()
    .setTitle('dragon bot')
    .setColor("RANDOM")
    .addField('Logs Bot', `----------------\nCommand: ${command}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID: **${message.guild.id}**`)
    
    .setFooter(`${client.user.tag}`) //FOOTER AND ICON
    .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!
  // .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  guildCreateDelete.send(log);

    } catch (error) {
		  console.error(error);
		  	};
  }
});
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
//client.on("guildCreate", async guild => {
// const invite = await guild.channels.first().createInvite({
 //  maxAge: 0
 // });
 // console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
//
//} );

//client.on("guildCreate", async guild => {
  //const invite = await guild.channels.first().createInvite({
   // maxAge: 0
  //});
  //client.channels.get('457743003000504331').send(`Bot Has Invite To New Guild  •  **${guild.name}**   with invite: https://discord.gg/${invite.code}`)

//});
client.on("guildCreate", async guild => {
 let guildCreateChannel = client.channels.get("457743003000504331");
 // const nameserver = ["general", "welcome", "photo", "announcements"];
 // let general = guild.channels.find(c=> c.name === 'welcome');
   const invite = await guild.channels.first().createInvite({
    maxAge: 0
  }).then(invite => {
  //guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Joined')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('Join the new Guild')
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
     
    guildCreateChannel.send(joinEmbed);
 });
}); 

client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("457743003000504331");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Guild Left')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
    
  guildCreateDelete.send(leaveEmbed);
});
  
  
// client.on(`guildMemberAdd`, async member => {
//     console.log(`${member.id} has joined the server!`);
//     let welcomechannel = member.guild.channels.find(`name`, "general");
//     let jEmbed = new Discord.RichEmbed()
//         .setDescription(`Oh man nice! ${member} has joined the server!`)
//         .setColor("RANDOM");
//     welcomechannel.send(jEmbed);
// });

// client.on(`guildMemberRemove`, async member => {
//   console.log(`${member} has left the server`);
//   let welcomechannel = member.guild.channels.find(`name`, "general"); 
//   let lEmbed = new Discord.RichEmbed()
//       .setDescription(`Oh no! ${member} has left the server :sob:`)
//       .setColor("RANDOM");
//   welcomechannel.send(lEmbed);
// });
  
client.on("message", (message) => {
  if(message.content === "d!") {
    message.channel.send("`Do d!help for help !`");
    message.delete(10000)
  }
});
 












client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  var argresult = args.join(' ');
	

  if (message.content == prefix + 'floof') {
        require('request').get('https://api.tfdfurry.com/floof.json', (err, res, body) => {
            message.channel.send(new Discord.RichEmbed()
                                 .setImage('https://' + JSON.parse(body).file))
        });
  }
  
   
  
  
  
  
  

  if(command === "st") {
 if (message.author.id !== ('424916247696900135')) return message.channel.send("Huh.");
  message.delete()
    let status = args.join(' ');
  if (status.length === 0) {
    let embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark: Name streaming status!')
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/ungkimyou', type: 1 } });
  let embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark: You sucessfully changed streaming status').then(msg => msg.delete(100));
  message.channel.send({ embed });
}};

  
//Gay Command\\
function gay() {
  var gay = ['5%', '25%', '34%', '27%', '62%', '82%', '3%' ,'45%', '50%', '75%', '100%']      
  return gay[Math.floor(Math.random()* gay.length)];    //Math.floor(Math.random() * 102)
};
if(command === `${prefix}gay`) {
  var msguser = message.mentions.members.first();
    if (msguser) {
    var gayEmbed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setAuthor('Requested By ' + message.author.tag, message.author.avatarURL)
    .setDescription(' I think ' + msguser + ' is ' + gay() + ' gay.');
    message.channel.send({embed: gayEmbed});
  } else {
    if (!msguser) {
      var gay2Embed = new Discord.RichEmbed()
      .setColor('BLUE')
      .setAuthor('Requested By ' + message.author.tag, message.author.avatarURL)
      .setDescription(' I think you are ' + gay() + ' gay.');
      message.channel.send({embed: gay2Embed});
  };
 };
};



  if(command === "botjoin") {
  return new Promise((resolve, reject) => {
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
});
}

  if(command === `${prefix}plus`) {
   if(!args[1]) return message.channel.send("**Enter two inputs for me to add.** `d!plus 52 69`");
   if(isNaN(args[0])) return message.channel.send("**Hey commands** `d!plus 52 69`");


    let num1 = `${args[0]}`;
    let num2 = `${args[1]}`;
   let result = parseInt(num1) + parseInt(num2);

   let addEmbed = new Discord.RichEmbed()

   
   .setColor('RANDOM')
   .setTitle(`${args[0]} + ${args[1]} = **${result}**`)
   .setTimestamp()
   message.channel.send(addEmbed);
   message.react("➕");
                       
}
  const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
   if (message.content.startsWith(prefix + "eval")) {
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

  if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}
    
if(message.content.startsWith(prefix + "youtube")) {
    let youtube = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + youtube;
	message.channel.send(link);
}
   if(command === `${prefix}username`) {
    if(message.mentions.users.first()) {
    let user = message.mentions.users.first();
    let output = user.username + user.discriminator
    "\nAvatar URL: " + user.avatarURL;
    message.channel.sendMessage(output);
  } else {
          message.reply("Invalid user.pls mention user"); 
          message.react('🚫');
    }
}  
  if(command === `${prefix}user`) {
    
let user = message.mentions.users.first();
if (!user) user = message.author;

     let userembed = new Discord.RichEmbed()
     .setColor("#ae67fc")
     .setThumbnail(user.iconURL)
     
     .addField("Username :", user.username)  
     .addField("ID", user.id)

      .setTimestamp()
     message.channel.send(userembed);
  message.react("✅");
  }

   if(command === `${prefix}myname`) {
     let sicon = message.guild.iconURL;
     let usernameembed = new Discord.RichEmbed()
     .setColor("#ae67fc")
     .setThumbnail(sicon)
     
     .addField("Your Username :", message.author.username)  
     .addField("ID", message.author.id)

      .setTimestamp()
     message.channel.send(usernameembed);
 message.react("✅");
   } 
  if(command === "join") {
  return new Promise((resolve, reject) => {
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t connect to your voice channel...');
voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
});
}

  if(message === `${prefix}flip`) {
		message.channel.send(`Result: **${Math.floor(Math.random() * 2) == 0 ? "heads" : "tails"}**!`);
	message.react("✅");
  }
  
  
  
if(command ===`${prefix}discordid`) {
  message.delete(15000);
  message.channel.send(`**${message.author.id}** <= your ID Discord`)
  message.delete(20000);
  message.react("✅");
}

  if(command ===`${prefix}countserver`) {
  message.channel.send(`Server counted: **${client.guilds.size} **`)
  message.react("✅");
  }
if(command === `${prefix}dmall`) {
      let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if(!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply({embed: {
            color: 0xC64540,
            description: "No permission."
          }});
     let DMALL = args.join(" ").slice(0);
    let sicon = message.guild.iconURL;
  if (!DMALL) return message.channel.send({embed: {
      color: 0xC64540,
      description: `${message.member} Please enter a message to dm all the players in the discord server.`
    }});

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0xC64540,

          description: `${DMALL}`
        }});
    });
    message.channel.send({embed: {
      color: 0xC64540,
      description: "All players in this discord server have got your message."
  }});
}
  
  if(command === `${prefix}dm`) {
     message.delete()
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (message.author.id !== ('424916247696900135')) 
          return message.reply({embed: {
            color: 0xC64540,
            description: "Only owner bot can use this commands."
          }});
     let DMALL = args.join(" ").slice(0);
    let sicon = message.guild.iconURL;
  if (!DMALL) return message.channel.send({embed: {
      color: 0xC64540,
      description: `${message.member} Please enter a message to dm all the players in the discord server.`
    }});

    message.guild.members.forEach((player) => {
        message.guild.member(player).send({embed: {
          color: 0xC64540,

          description: `${DMALL}`
       
        }});
    });
    message.channel.send({embed: {
      color: 0xC64540,
      description: "I Hope you enjoy!."
    
  }});
}
  
  if(command === `${prefix}saydm`) {
     message.delete()
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (message.author.id !== ('424916247696900135'))  return message.reply('hah');
     let DMALL = args.join(" ").slice(0);
    let sicon = message.guild.iconURL;
  if (!DMALL) return message.channel.send({embed: {
      color: 0xC64540,
      description: `${message.member} Please enter a message to dm all the players in the discord server.`
    }});

    message.guild.members.forEach((player) => {
        message.guild.member(player).send( `${DMALL}`);
    });
    message.channel.send({embed: {
      color: 0xC64540,
      description: "I Hope you enjoy!."
    
  }});
}
  //if(command === `${prefix}dmjik`) {
    // message.delete()
   // let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
   //     if (message.author.id !== ('379955612936699904'))  return message.reply('hah');
   //  let DMALL = args.join(" ").slice(0);
   // let sicon = message.guild.iconURL;
//  if (!DMALL) return message.channel.send({embed: {
    //  color: 0xC64540,
   //   description: `${message.member} Please enter a message to dm all the players in the discord server.`
 //   }});

   // message.guild.members.forEach((player) => {
    //    message.guild.member(player).send( `${DMALL}`);
   // });
  //  message.channel.send({embed: {
    //  color: 0xC64540,
    //  description: "I Hope you enjoy!."
    
 // }});
//}
  if(command === `${prefix}dmhour`) {
     message.delete()
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (message.author.id !== ('399085058264268802'))  return message.reply('hah');
     let DMALL = args.join(" ").slice(0);
    let sicon = message.guild.iconURL;
  if (!DMALL) return message.channel.send({embed: {
      color: 0xC64540,
      description: `${message.member} Please enter a message to dm all the players in the discord server.`
    }});

    message.guild.members.forEach((player) => {
        message.guild.member(player).send( `${DMALL}`);
    });
    message.channel.send({embed: {
      color: 0xC64540,
      description: "I Hope you enjoy!."
    
  }});
}
  if (command ===`${prefix}hug`) {
    let hug = [
        "https://data.whicdn.com/images/221692186/original.gif",
        "http://mrwgifs.com/wp-content/uploads/2013/04/Ouran-High-School-Host-Club-Love-Hug-Gif.gif",
        "http://images6.fanpop.com/image/photos/33100000/Kyoya-and-Tamaki-ouran-high-school-host-club-33132917-500-375.gif",
        "http://31.media.tumblr.com/4d6525e7b5e546cde555bf2453563335/tumblr_mskyp8XJcb1r40gm7o1_1280.gif",
        "https://i.pinimg.com/originals/34/dc/98/34dc98f17fd5cf558611f14ff9a0c1c9.gif",
        "https://78.media.tumblr.com/6bef64140dfefe6fe86089c6eb11fb9b/tumblr_ohhnjyDJll1vm2xpgo1_500.gif",
        "https://78.media.tumblr.com/806c23dbcf9bde033e708c8679c63975/tumblr_inline_ohhtig3BpF1rz9r19_540.gif",
        "https://i.pinimg.com/originals/0f/48/1b/0f481bfc59229ce8127f2aba52bb8f4a.gif",
        "https://pa1.narvii.com/6276/4461c2a865973bddcc5f4e591a165e09275c7a2c_hq.gif",
        "https://78.media.tumblr.com/7e29c1e560c527de00a9f57bb7d941c3/tumblr_inline_ohi8745BbI1u9qbij_540.gif",
        "https://data.whicdn.com/images/271163043/original.gif",
        "https://78.media.tumblr.com/d00aba2e25ac11a11d9c5a770275dfc8/tumblr_orpdyc83FN1rtwid9o1_500.gif",
        "http://0.media.dorkly.cvcdn.com/33/43/cac85de1cfd2bc4e7bec36631b260156.gif",
        "https://i.pinimg.com/originals/22/8a/c9/228ac960b7c24ffb87374857fa6a0920.gif",
        "https://pa1.narvii.com/6333/8c254b88d099c03be84769075ecac875c5dbb4bb_hq.gif",
        "https://pa1.narvii.com/6449/c5383d0a548987d69aac06e8dc9b270219159b3f_hq.gif",
        "https://media1.tenor.com/images/100c453c2f411189b40e6931ff65a88b/tenor.gif?itemid=7210521",
        "https://i.pinimg.com/originals/e5/0e/c8/e50ec889ef64432e5d4648370014d272.gif",
        "https://78.media.tumblr.com/94f62f2fbca608f70a48e6c04c2dc27c/tumblr_orotkrEC4t1vbbkedo2_540.gif",
        "http://i0.kym-cdn.com/photos/images/original/001/266/481/075.gif",
        "https://data.whicdn.com/images/310192271/original.gif",
        "https://78.media.tumblr.com/064596e2fb0101675b89d79ac41141e0/tumblr_p8g2jmxCLD1qc9mvbo1_540.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} hugged themself...! (weirdo)`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a hug! How sweet!`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(`${message.author.username} hugged themself...! (weirdo)`)
        .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
    message.channel.send({
        embed: ghembed
    })
}
if (command ===`${prefix}kiss`) {
    let kiss = [
      "https://media1.tenor.com/images/395b565d26a74bcf6b6fc8cea50df021/tenor.gif",
      "http://cdn.smosh.com/wp-content/uploads/ftpuploads/bloguploads/awkward-kiss-little-girl.gif",
      "https://thumbs.gfycat.com/BasicPeskyGuillemot-max-1mb.gif",
      "https://i.pinimg.com/originals/fe/64/e9/fe64e9e2f16ced383c0cb69e5f71722d.gif",
      "http://25.media.tumblr.com/e7f39c316f0923710c9b12e9583455ba/tumblr_mj7yrrtFaa1s7cfr2o1_500.gif",
      "https://media2.giphy.com/media/TkDX9bkIROf8k/giphy.gif",
      "http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-11.gif",
      "https://i.imgur.com/eisk88U.gif",
      "https://i.pinimg.com/originals/42/c3/85/42c3851fc31dc3434dfe5fa7e3463f1d.gif",
      "https://i.makeagif.com/media/7-05-2015/553Vsb.gif",
      "https://i.gifer.com/2II9.gif",
      "http:/http://gif-finder.com/wp-content/uploads/2015/09/Angry-Birds-Orange-Kiss.gif/a.fod4.com/images/GifGuide/michael_scott/119477_o.gif",
      "http://gif-finder.com/wp-content/uploads/2015/09/Angry-Birds-Orange-Kiss.gif",
      "https://media1.tenor.com/images/6af13a438013667a81031dde8d6b6931/tenor.gif",
      "https://media1.tenor.com/images/a3e63e98f0344a2e9a040ea5df3769b0/tenor.gif",
      "https://media1.tenor.com/images/fb92d0be78a1ea19af0168c0ca29c1bd/tenor.gif",
      
    ]
    let hugresult = Math.floor((Math.random() * kiss.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} kiss themself...! (weirdo)`)
            .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.username} kiss ${message.mentions.members.first().user.username} a hug! How sweet!`)
            .setImage(kiss[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(`${message.author.username} hugged themself...! (weirdo)`)
        .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
    message.channel.send({
        embed: ghembed
    })
}  
  if(command === `${prefix}bond`) {
  if(!args[0]) return message.channel.send("**Mention a user or users that you want to bond.** `PREFIX bond <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'Perfect Couple <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Lit Couple <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'A littly risky but can work out! '
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Eh.'
        var bondLevelResults = `♥♥♥♥♥♥🖤🖤🖤🖤`
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'No Comment'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Not even possible...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor(`RANDOM`)
        .addField("Users", `${message.author} x ${args[0]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship)
         .setTimestamp()


        return message.channel.send(bondEmbed)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor(`RANDOM`)
        .addField("Users", `${args[0]} x ${args[1]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship)
         .setTimestamp()
        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor(`RANDOM`)
        .addField("Users", `${args[0]} x ${args[1]} x ${args[2]}`)
        .addField("Bond Score", `${bondLevel}%`)
        .addField("Bond Bar", bondLevelResults)
        .addField("Summary", ship)
         .setTimestamp()


        return message.channel.send(bondEmbed)
    }
}
  
  
  
  
  if(command === `{prefix}NoPe`) {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 500)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  
  if(command === `${prefix}ascii`) {
  message.delete(5000);
  message.react("✅");
  if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!') 
  if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>')
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
};
  

       
 if(command === `${prefix}addrole`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You don't have premmsions to do that!**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!args[0]) return message.channel.send('**Mention a user, and type a role to give to the user.** `d!addrole <@User> <RoleName>`')
  if(!rMember) return message.channel.send("**User not found.** ` d!addrole <user> <role>`");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**Specify a role!** `d!addrole <user> <role>`");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**Role not found.** `d!addrole <user> <role>`");

  if(rMember.roles.has(gRole.id)) return message.channel.send("This user already has that role.");
  await(rMember.addRole(gRole.id));

  message.channel.send(`**${rMember}** has the role **${gRole.name}** now!`)
  message.delete(800);
}
  
  if(command === `${prefix}removerole`) {
  if(!message.member.hasPermissions("MANAGE_ROLES")) return message.reply("You do not have permission to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("User not found.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Role not found.");

  if(!rMember.roles.has(gRole.id)) return message.reply("This user doesn\'t have that role.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`**${rMember} deos not have the role, ${gRole.name} anymore!**`)
  message.delete(800);

}
  if(message.content.startsWith(prefix + "mc")) {
	let typeapi = args[0]
	let ip = args[1]
 var req = require("request")
 let bot = client;
	if(typeapi === "server") {
	req('https://mcapi.us/server/status?ip=' + ip, (e, r, b)=> {
		let contenu = JSON.parse(b)
		if(contenu.online === false) {
			message.channel.send("Invalid hostname (i use only port `25565`) or offline")
		} else {
	const embed = new Discord.RichEmbed()
		embed.setTitle("<:minecraft:416218262196584449>")
		embed.setAuthor(bot.user.username, bot.user.avatarURL)
		embed.setColor(0x00AE86)
		embed.setFooter(bot.user.username, bot.user.avatarURL);
		embed.addField(ip, contenu.motd)
		embed.addField("Players", contenu.players.now + "/" + contenu.players.max)
		embed.addField("Version", contenu.server.name)
		embed.setThumbnail("http://mcapi.de/api/image/favicon/" + ip)
		embed.setTimestamp()
		message.channel.send({embed});
		}
	})
	}
	if(typeapi === "player") {
		req('https://mcapi.de/api/user/' + ip, (e, r, b)=> {
			let contenu = JSON.parse(b)
			if(contenu.premium === false) {
				message.channel.send("Invalid user or not premium")
			} else {
		const embed = new Discord.RichEmbed()
			embed.setTitle("<:minecraft:416218262196584449>")
			embed.setAuthor(bot.user.username, bot.user.avatarURL)
			embed.setColor(0x00AE86)
			embed.setFooter("Updated on " + contenu.updated.time + " (tz " + contenu.updated.zone + ")");
			embed.addField("Premium ?", "Yes ✅")
			embed.addField("UUID", contenu.uuid)
			embed.setThumbnail("https://minotar.net/helm/" + ip)
			embed.setImage("https://minotar.net/body/" + ip)
			embed.setTimestamp()
			message.channel.send({embed});
			}
		})
	}
	if(typeapi === "status") {
		req('http://mcapi.de/api/game/status/api.mojang.com', (e, r, b)=> {
			let contenu = JSON.parse(b)
		const embed = new Discord.RichEmbed()
			embed.setTitle("<:mojang:416218990222901268>")
			embed.setAuthor(bot.user.username, bot.user.avatarURL)
			embed.setColor(0x00AE86)
			embed.setFooter("Updated on " + contenu.updated.time + " (tz " + contenu.updated.zone + ")");
			embed.addField(contenu.service.part + " " + contenu.service.description, contenu.service.status)
			embed.setThumbnail("https://pbs.twimg.com/profile_images/658664874856333313/MhnCHMVD_400x400.png")
			embed.setTimestamp()
			message.channel.send({embed});
		})
	} if(typeapi != "status" && typeapi != "player" && typeapi != "server") {
		message.channel.send("__Args list :__\n\n`status` : to get MC/Mojang api status\n`player` : to get info about a player\n`server` : to get info about a server")
	}
}
  var bot = client;
if(message.content.startsWith(prefix + 'playerinfo')) {
		let member = message.mentions.members
		if(!member && !argresult.startsWith("dbl") && !argresult.startsWith("bd")) {
			const embed = new Discord.RichEmbed()
			embed.setTitle(message.author.username)
			embed.setAuthor("EmoteCord Bot")
			embed.setColor(0x00AE86)
			embed.setFooter(bot.user.username, bot.user.avatarURL);
			embed.setImage(message.author.displayAvatarURL)
			embed.setTimestamp()
			embed.addField("Account creation", message.author.createdAt)
			embed.addField("Name", message.author.username + "#" + message.author.discriminator)
			message.channel.send({embed});
		}
}



			

})




//client.on('guildMemberAdd', member => {
 //member.guild.channels.get('461038450334892032').setName(`Total Users: ${member.guild.memberCount}`); //server dragon
//});

//client.on('guildMemberRemove', member => {
     // member.guild.channels.get('461038450334892032').setName(`Total Users: ${member.guild.memberCount}`);
//});
//mmemberjoin : https://hastebin.com/gedecajeke.js
////client.on('guildMemberAdd', member => {
  // member.guild.channels.get('460048945372987435').setName(`Total Users: ${member.guild.memberCount}`); //460048945372987435 Si leng server!!
//});

////client.on('guildMemberRemove', member => {
   // member.guild.channels.get('460048945372987435').setName(`Total Users: ${member.guild.memberCount}`);
//});
//memberjoin : https://hastebin.com/gedecajeke.js

 const serverStats = {
   guildID: '446655852586467330',
   totalUserID: '461038450334892032',
   membercountID: '467940063427297280',
   botcountID: '467940200539095042',
 }

 client.on('guildMemberAdd', member => {
   if (member.guild.id !== serverStats.guildID) return;
   client.channels.get(serverStats.totalUserID).setName(`Total Members : ${member.guild.memberCount}`);
   client.channels.get(serverStats.membercountID).setName(`All User : ${member.guild.members.filter(m => !m.user.bot).size}`);
   client.channels.get(serverStats.botcountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
 });
 client.on('guildMemberRemove', member => {
  if (member.guild.id !== serverStats.guildID) return;
   client.channels.get(serverStats.totalUserID).setName(`Total Members : ${member.guild.memberCount}`);
   client.channels.get(serverStats.membercountID).setName(`All User : ${member.guild.members.filter(m => !m.user.bot).size}`);
   client.channels.get(serverStats.botcountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);
 });
 
 
 
 
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing PLAYERUNKNOWN'S BATTLEGROUNDS");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing Counter-Strike Global Offensive");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Counter-Strike Global Offensive") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing Minecraft");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Minecraft") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing Grand Theft Auto V");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Grand Theft Auto V") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing DOTA 2");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "DOTA 2") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing OverWatch");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Overwatch") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing Fortnite");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Fortnite") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});
client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing Rules Of Survival");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "Rules Of Survival") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing osu!");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "osu!") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});

client.on("presenceUpdate", (oldMember, newMember) => {
  let guild = newMember.guild;
  let playRole = guild.roles.find(c=> c.name === "Playing ROBLOX");
  if(!playRole) return;  

  if(newMember.user.presence.game && newMember.user.presence.game.name === "ROBLOX") {
    newMember.addRole(playRole);
  } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
    newMember.removeRole(playRole);
  let guild = newMember.guild;
  if(!playRole) return;
    
  }  
});



// client.on("presenceUpdate", (oldMember, newMember) => {
//   let guild = newMember.guild;
//   let playRole = guild.roles.find("name", "Playing osu!");
//   if(!playRole) return;  

//   if(newMember.user.presence.game && newMember.user.presence.game.name === "osu!") {
//     newMember.addRole(playRole);
//   } else if(!newMember.user.game && newMember.roles.has(playRole.id)) {
//     newMember.removeRole(playRole);
//   let guild = newMember.guild;
//   if(!playRole) return;
    
//   }  
// });


//client.on('messageDelete', async (message) => {
  //  const logs = message.guild.channels.find('name', 'logs');
   // if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
  //      await message.guild.createChannel('logs', 'text');
 //   }
  //  if (!logs) {
 //       return console.log('The logs channel does not exist and cannot be created')
  //  }
  //  const entry = await message.guild.fetchAuditLogs({
 //       type: 'MESSAGE_DELETE'
  //  }).then(audit => audit.entries.first())
  //  let user;
   // if (entry.extra.channel.id === message.channel.id && (entry.target.id === message.author.id) && (entry.createdTimestamp > (Date.now() - 5000)) && (entry.extra.count >= 1)) {
  //      user = entry.executor.username
   // } else {
    //    user = message.author
   // }
   // const logembed = new Discord.RichEmbed()
   //     //.setTitle('Message Deleted')
   //     .setAuthor(user.tag, message.author.displayAvatarURL)
   //     .addField(`**Message sent by ${message.author.username}> deleted in ${message.channel.name}**\n\n`, message.content)
  //      .setColor(message.guild.member(client.user).displayHexColor)
   //     .setFooter(`<#${message.channel.id}>`)
   //     .setTimestamp()
    //console.log(entry)
 //   logs.send(logembed);
//






// client.on('voiceStateUpdate', async (oldMember, newMember) => {
  
//   if(newMember.guild.id !== "446655852586467330") return;
  
//   let newUserChannel = newMember.voiceChannel
//   let oldUserChannel = oldMember.voiceChannel
//   var timerInt;

//   if(oldUserChannel === undefined && newUserChannel !== undefined) { // Qui l'utente entra
//     console.log("Utente entrato")
    
//     let ts = 10
    
//     timerInt = setInterval(async function() { // Inizio timer
      
//       if(newUserChannel !== undefined) {
        
//     let tempo = await db.fetch(`tempo_${newMember.user.id}`, { target: '.PUNTI' })
    
//     try {
//     db.fetch(`tempo_${newMember.user.id}`, { target: '.PUNTI' }).then(time => {
    
//       if(time == null) {
//         let data = { ID: newMember.user.id, PUNTI: 0 };
//         db.set(`tempo_${newMember.user.id}`, data)
//       }
      
//     })
//   } catch(err) {console.log(err)}
        
//         db.add(`tempo_${newMember.user.id}`, ts, { target: '.PUNTI' })
        
//       }
      
//     }, 10000); // Fine timer


//   } else if(newUserChannel === undefined){

//             console.log("Utente uscito")
//           clearInterval(timerInt)

//   }
// })

//const Discord = require('discord.js');
const Canvas = require('canvas');
//const snekfetch = require('snekfetch');

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

	
client.on("guildMemberAdd", async (member, client, message, args, level) => {  
  
  var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }
    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;
      
	   var imageArray = [
    "https://cdn.discordapp.com/attachments/501962989499318273/502528342109454337/pexels-photo-414586.jpg",
    "https://cdn.discordapp.com/attachments/503595863814438914/503596835181690909/download.jpg",
    "https://cdn.discordapp.com/attachments/501962989499318273/502529564573040640/276517-free-nature-background-2560x1600-for-xiaomi.jpg",
    "https://cdn.discordapp.com/attachments/503595863814438914/503597097044672537/images.jpg",
    "https://cdn.discordapp.com/attachments/503595863814438914/503597234173116427/images.jpg",
    "https://cdn.discordapp.com/attachments/503595863814438914/503597510195937282/images.jpg",
    "https://cdn.discordapp.com/attachments/503595863814438914/503597707126898688/images.jpg"
];
  //	const channel = member.guild.channels.find(ch => ch.name === 'wel-test');
//	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/503595863814438914/503597707126898688/images.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

//	channel.send(`Welcome to the server, ${member}!`, attachment);

	channel.send(`Welcome to the server, ${member}!`, attachment);
         //   channel.send(`Welcome To **${guild.name}**, **${member}** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`);
    }
});







//})

client.login(process.env.TOKEN);