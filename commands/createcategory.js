module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`:x: ${message.author} You don't permission to do thta.premission **manager channel** `)
    }else{
      if(!args || args.length < 1){
         message.channel.send(`:x: ${message.author} Pls give name of category`)
         return;
    }else{
       message.guild.createChannel(message.content.substr(15), "text")
       message.channel.send(`:heavy_check_mark: category has been created !`)
        }
      }
    }
module.exports.help = {
    name: "createcategory"
}