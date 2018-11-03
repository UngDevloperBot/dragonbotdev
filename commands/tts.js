const tts = require('google-tts-api');
const path = require('path');
const snekfetch = require('snekfetch');
module.exports.run = async (client, message, args) => {  
//  let bug = args[0]
  // console.log(args[1])
  let tts1 = message.content.split(" ").slice(1).join(" ");
  if (!tts1) return message.channel.send('Please enter a text to tts!')
const emoji  = "🇵🇭"
const emoji1 = "🇬🇧"
const emoji2 = "🇫🇮"
const emoji3 = "🇪🇸"
const emoji4 = "🇰🇭"
const emoji5 = "🇻🇳"
const emoji6 = "🇯🇵"
const emoji7 = "🇰🇷"
const emoji8 = "🇹🇭"

message.channel.send('**Please choose a language with the reaction.** ')
.then( msg => {

msg.react(emoji).then( r => {
msg.react(emoji1)
msg.react(emoji2)
msg.react(emoji3)
msg.react(emoji4)
msg.react(emoji5)
msg.react(emoji6)
msg.react(emoji7)
msg.react(emoji8)
  
  const Tagalog = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
  const england = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
  const finish = (reaction, user) => reaction.emoji.name === emoji2 && user.id === message.author.id;
  const spanien = (reaction, user) => reaction.emoji.name === emoji3 && user.id === message.author.id;
  const khmer = (reaction, user) => reaction.emoji.name === emoji4 && user.id === message.author.id;
  const Vietnamese = (reaction,user) => reaction.emoji.name === emoji5 && user.id === message.author.id;
  const Japanese = (reaction, user) => reaction.emoji.name === emoji6 && user.id === message.author.id;
  const Korean = (reaction,user) => reaction.emoji.name === emoji7 && user.id === message.author.id;
  const thai = (reaction,user) => reaction.emoji.name === emoji8 && user.id === message.author.id;
  
  const swe = msg.createReactionCollector(Tagalog, { time: 10000 });
  const eng = msg.createReactionCollector(england, { time: 10000 });
  const fin = msg.createReactionCollector(finish, { time: 10000 });
  const spa = msg.createReactionCollector(spanien, { time: 10000 });
  const khm = msg.createReactionCollector(khmer, { time: 10000 });
  const vie = msg.createReactionCollector(Vietnamese,{ time: 10000});
  const jap = msg.createReactionCollector(Japanese, { time: 10000 });
  const kor = msg.createReactionCollector(Korean,{ time: 10000});
  const tha = msg.createReactionCollector(thai,{ time: 10000});


  swe.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `tl`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react("🇵🇭");
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  
  swe.on('end', r => {
        return;
        
         })
  eng.on('collect', r => {
              const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `en`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react("🇬🇧");
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })

  
    fin.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `fi`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react("🇫🇮");
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {

            voiceChannel.leave();
          });
        });
       } else {
         message.channel.send(':no_entry_sign: Sorry but it seems like I\'m already playing something on this server.');
       }
  })
      spa.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `tl`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react("🇪🇸");
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  khm.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `km`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react("🇰🇭");
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  vie.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `vi`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react("🇻🇳");
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  jap.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `ja`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react('🇯🇵');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
 tha.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `th`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react('🇹🇭');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  kor.on('collect', r => {

            const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('**Please be in a voice channel first!**');
        if (!client.voiceConnections.get(message.channel.guild.id)) {
        voiceChannel.join()
        .then(connnection => {
          tts(tts1, `ko`, 1)
          .then((url) => {
            const dispatcher = connnection.playStream(url);
            message.react('📢');
            message.react('🇰🇷');
            dispatcher.on('end', () => voiceChannel.leave());
          })
          .catch((err) => {
            message.channel.send(':no_entry_sign: Something wen\'t wrong.\n' + err);
            voiceChannel.leave();
          });
        });
       } else {

       }
  })
  
})
  

})
}

    