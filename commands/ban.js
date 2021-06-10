const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports.run  = function(client,message,args){
  try {
  if (!message.member.permissions.has(["BAN_MEMBERS"])) return message.channel.send("You can't use this command")
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(member.bannable){
 member.ban({reason: `${message.member.id} | ${(args[1]) ? args[1]: "no reason provided"}`});
message.reply(`${member.user.tag} has been banned!`);
  }
  else{
    message.reply(`${member.user.tag} cannot be banned,please check my rolearchy and if there server owner!`);
  }
}
  catch(e){
    message.reply("Error banning user:"+ e)
  }

}
module.exports.help = {
    name:"ban"
  }
   