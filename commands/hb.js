const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let code = args.join(" ")
if(!code) return message.channel.send(`For this command to work, you need to put some code.`)
try {
  hastebin(code, "js").then(r => {
    message.channel.send(r); 
})
}catch(e){
message.channel.send("Encountered an error with the api. Please try again later.")
}
}
module.exports.help = {
name: "hb"
}
