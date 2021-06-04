const Discord = require('discord.js');
module.exports.run  = function(client, message, args){
   
    var argsstr = "";   
    var argi = 0;
    if (!message.member.permissions.has(["MANAGE_MESSAGES"])) return message.channel.send("You can't use this command")
    const sayembed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setTitle('🗣User Message🗣') 
    .setURL("")
    .setAuthor( message.author.tag , message.author.avatarURL,""    )
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
   
message.channel.send(sayembed)
message.delete();

}
module.exports.help = {
    name:"say"
  }
  