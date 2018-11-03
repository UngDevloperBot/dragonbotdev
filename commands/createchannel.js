module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`:x: ${message.author} You don't permission to do thta.premission **manager channel** `)
    }else{
      if(!args || args.length < 1){
         message.channel.send(`:x: ${message.author} Pls give name of textchannel.`)
         return;
    }else{
       message.guild.createChannel(args[0], "text")
       message.channel.send(`:heavy_check_mark: Channel has been created !`)
        }
      }
}

module.exports.help = {
    name: "createchannel"
  }