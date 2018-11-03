
// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// // if ./.data/sqlite.db does not exist, create it, otherwise print records to console
// db.serialize(function(){
//   if (!exists) {
//     db.run('CREATE TABLE Dreams (dream TEXT)');
//     console.log('New table Dreams created!');
    
//     // insert default dreams
//     db.serialize(function() {
//       db.run('INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")');
//     });
//   }
//   else {
//     console.log('Database "Dreams" ready to go!');
//     db.each('SELECT * from Dreams', function(err, row) {
//       if ( row ) {
//         console.log('record:', row);
//       }
//     });
//   }
// });

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// endpoint to get all the dreams in the database
// currently this is the only endpoint, ie. adding dreams won't update the database
// read the sqlite3 module docs and try to add your own! https://www.npmjs.com/package/sqlite3
app.get('/getDreams', function(request, response) {
  db.all('SELECT * from Dreams', function(err, rows) {
    response.send(JSON.stringify(rows));
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



////////const////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const http = require('http');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAiXso9DqLY7G6Iey-_9XQXE63NaWMojdg');
const queue = new Map(); 
const ytdl = require('ytdl-core'); 
const ffmpeg = require('ffmpeg'); 
const prefix = 'd!';
const ownerID = '424916247696900135';
const snekfetch = require("snekfetch")
const money = require('discord-money');


////////////commands////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
   
	let commands = client.channels.get("494688036215586836");
  
  let log = new Discord.RichEmbed()
    .setTitle('dragon bot')
    .setColor("RANDOM")
    .addField('Logs Bot', `----------------\nCommand: ${command}\nRan by: ${message.author.tag}\n----------------`)
    .addField('commands from server', `Name: **${message.guild.name}** \nID: **${message.guild.id}**`)
    
    .setFooter(`${client.user.tag}`) //FOOTER AND ICON
    .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!
  // .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  commands.send(log);

    } catch (error) {
      
		  console.error(error);
      process.on('unhandledRejection', e => console.error(e.stack || e))
		  	
    };
    
  }
});

//////event/////////////////////////////////////////////////////////////////////////////////////////////////////////////
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
//////d!///////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on("message", (message) => {
  if(message.content === "d!") {
    message.channel.send("`Do d!help for show help commands !`");
    message.delete(10000)
  }

});

client.on('message', message=> {
    if (message.isMentioned('<@450933100021809171>')) {
    message.reply('message here');
}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  var argresult = args.join(' ');
	

   
  
  
  
  
  

 



 

 
  
  if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}
    
//if(message.content.startsWith(prefix + "youtube")) {
   // let youtube = args.slice(1).join('+');
   // let link = `https://www.youtube.com/results?search_query=` + youtube;
//	message.channel.send(link);
//}
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

    message.guild.members.forEach((player) => {      description: "All players in this discord server have got your message."

        message.guild.member(player).send({embed: {
          color: 0xC64540,

          description: `${DMALL}`
        }});
    });
    message.channel.send({embed: {
      color: 0xC64540,
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

  
  
   if (command === "kickbot") {
         if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");

         var error17 = new Discord.RichEmbed().setColor("990033")
             .setDescription('**Please enter a valid server ID.**')
             .setColor(0xff0000)

         var error18 = new Discord.RichEmbed().setColor("990033")
             .setDescription('**You cannot kick the bot from this server!**')
             .setColor(0xff0000)


         if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
             msg.delete(9000)
         });

         //If tried kick bot from a main server (like for emote provider) will return error18
         if (args[0] !== 494224826563559448 || 486784307940294657) return message.channel.send(error18).then(msg => {
             msg.delete(9000)
         });

         client.guilds.get(args[0]).leave();
         message.channel.send(`**Bot was been removed from server id [${args[0]}]**`)
     }
})
   

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// client.on("roleUpdate", async (oldRole, newRole) => {
  
//   let logchannel = oldRole.guild.channels.find(`name`, "mods-log");
//   logchannel.send(`The role ${oldRole.name} has Updated  ${newRole}`);


// });
// client.on("guildMemberUpdate", async (oldMember, newMember) => {

//   let logchannel = newMember.guild.channels.find(`name`, "mods-log");

  
//   if(oldMember.displayName == newMember.displayName){
//     return logchannel.send(`The user ${newMember} has been updated.`)
//   }

//  // logchannel.send(`The user ${oldMember.displayName} has changed Nickname to ${newMember}`);

// });
// client.on("roleDelete", async role => { 

//   let logchannel = role.guild.channels.find('name', "mods-log");
//   logchannel.send(`The role ${role.name} has been deleted.!`);

// });

// client.on('channelCreate', async channel => {

//   console.log(`${channel.name} has been created.`);

// if (channel.type != 'text') return;
//   let sChannel = channel.guild.channels.find('name', 'mods-log');
//   sChannel.send(`The channel ${channel} has been created`);

// });

// client.on("channelDelete", async channel => {

//   console.log(`${channel.name} has been deleted.`);

//   let sChannel = channel.guild.channels.find(`name`, "mods-log");
//   sChannel.send(`The channel ${channel.name} has been deleted`);

// });
// client.on("voiceStateUpdate", (member) => {
//         console.log("[INFO: Voice Status Update.]");
//         const channel = member.guild.channels.find('name', "mods-log");
//         if (!channel) {
//             console.log("[BOT-WARNING] - There is not a channel named: " + "mods-log" + ". You can change the default log channel in the config.json");
//             return;
//         }
//         channel.send(`${member} joined voicechanel`);
// });
/////////////////////////////////////////////////////////////////////////////////////////




//Invite Blocker
//const fs = require("fs");
const ms = require("ms");

let al = JSON.parse(fs.readFileSync(`./inviteblocker.json`, `utf8`));


client.on('message', message => {
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;

    if (!al[message.guild.id]) al[message.guild.id] = {
        onoff: 'Off'
    }

    if (message.content === prefix + 'guildinfo1') {
        let perms = message.member.hasPermission(`ADMINISTRATOR`)
        if (!perms) return message.reply(`** :x: | You don't have permissions __ADMINISTRATOR__**`)
        var embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}'s Config`)


            .addField(`:no_entry_sign: inviteblocker : `, `inviteblocker State : ${al[message.guild.id].onoff}`)

            .setColor(`BLUE`)
        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + 'inviteblocker') {
        let perms = message.member.hasPermission(`ADMINISTRATOR`)
        if (!perms) return message.reply(`** :x: | You don't have permissions __ADMINISTRATOR__**`)
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (al[message.guild.id].onoff === 'Off') return [message.channel.send(`**Invite Blocker is now ON! :white_check_mark: **`), al[message.guild.id].onoff = 'On']
            if (al[message.guild.id].onoff === 'On') return [message.channel.send(`**Invite Blocker is now Off! :no_entry_sign: **`), al[message.guild.id].onoff = 'Off'] //:D

        }
    }
    if (message.content.includes('discord.gg','gg')) {
        if (al[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
        return message.reply(`** Discord Invite Links are not allowed here! :anger:  **`)
    }
   
    fs.writeFile("./inviteblocker.json", JSON.stringify(al), (err) => {
        if (err) console.error(err)
    });
});

//anti link 
client.on('message', message => {
    var sender = message.author
    if (!message.channel.guild) return;
    if (message.author.bot) return null;

    if (!al[message.guild.id]) al[message.guild.id] = {
        onoff: 'Off'
    }

    if (message.content === prefix + 'guildinfo2') {
        let perms = message.member.hasPermission(`ADMINISTRATOR`)
        if (!perms) return message.reply(`** :x: | You don't have permissions __ADMINISTRATOR__**`)
        var embed = new Discord.RichEmbed()
            .setTitle(`${message.guild.name}'s Config`)


            .addField(`:no_entry_sign: linkblocker : `, `linkblocker State : ${al[message.guild.id].onoff}`)

            .setColor(`BLUE`)
        message.channel.send({
            embed
        })
    }
    if (message.content === prefix + 'anti-link') {
        let perms = message.member.hasPermission(`ADMINISTRATOR`)
        if (!perms) return message.reply(`**You don't have permissions __ADMINISTRATOR__**`)
        let args = message.content.split(" ").slice(1)
        if (!args.join(" ")) {
            if (al[message.guild.id].onoff === 'Off') return [message.channel.send(`**Anti-link is now ON! :white_check_mark: **`), al[message.guild.id].onoff = 'On']
            if (al[message.guild.id].onoff === 'On') return [message.channel.send(`**Anti-link is now Off! :no_entry_sign: **`), al[message.guild.id].onoff = 'Off'] //:D

        }
    }
    if (message.content.includes('https://')) {
        if (al[message.guild.id].onoff === 'Off') return
        if (message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete()
        return message.reply(`**Links are not allowed here! :anger:  **`)
    }
   
    fs.writeFile("./linkblocker.json", JSON.stringify(al), (err) => {
        if (err) console.error(err)
    });
});


const Canvass = require('canvas');
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
       "https://cdn.discordapp.com/attachments/505470017295351848/505473047969398784/no-translate-detected_1297-85.jpg",
       "https://cdn.discordapp.com/attachments/505470017295351848/505473054793531412/floral-green-colorful-background-vector.jpg",
       "https://cdn.discordapp.com/attachments/505470017295351848/505473066445439009/luz-verde-natureza-cor-poligono-desenho-de-fundo-abstrato-geometrico-origami-estilo_9028-16.jpg",
       "https://cdn.discordapp.com/attachments/505470017295351848/505473079380803584/background-1561710_960_720.jpg",
       "https://cdn.discordapp.com/attachments/505470017295351848/505473088486637568/rainbow-background-2-big.jpg",
       "https://cdn.discordapp.com/attachments/505470017295351848/505473467559444501/images.jpg",
       "https://cdn.discordapp.com/attachments/505470017295351848/505473480750268446/istockphoto-888994838-640x640.jpg",
       "https://cdn.discordapp.com/attachments/501409836227887105/505628408110252033/mnqJKw.jpg"
];
      var cuddle = [Math.floor(Math.random() * imageArray.length)]
      const guild = member.guild;
  //	const channel = member.guild.channels.find(ch => ch.name === 'wel-test');
//	if (!channel) return;

	const canvas = Canvass.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	
  const background = await Canvass.loadImage(`${imageArray[cuddle]}`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Welcome To ${guild.name}`, canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvass.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

//	channel.send(`Welcome to the server, ${member}!`, attachment);

	channel.send(`Welcome To **${guild.name}**, **${member}** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`, attachment);
         //   channel.send(`Welcome To **${guild.name}**, **${member}** Hope You Enjoy In This Server\nYou are the **${member.guild.memberCount}** Member!`);
    }
});









//🙏🏻🙏🏻client online/////////////////////////////////////////////////////////////////////////////////////////////

client.login(process.env.TOKEN);





