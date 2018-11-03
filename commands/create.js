const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client,message,args) => {
    
  const type = message.content.split(" ").slice(1,2).join(" ");
  const name = message.content.split(" ").slice(2).join(" ");

if(type === "text"){
let chanl = message.guild.channels.find("name", name);
if(chanl)return message.channel.send("that's already channel here");
if(!chanl){
message.guild.createChannel(name, "text");
message.channel.send(`i've created your "${name}" channel`);
}
}
if(type === "voice"){
let chanl = message.guild.channels.find("name", name);
if(chanl)return message.channel.send("that's already channel here");
if(!chanl){
message.guild.createChannel(name, "voce");
message.channel.send(`i've created your "${name}" channel`);
}
    } else {
message.guild.createChannel(name, "category");
}
      
}
module.exports.help = {
    name: "create"
}