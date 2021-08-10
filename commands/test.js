const Discord = require('discord.js');
module.exports.run  = function(client,message){
message.reply("Hello, Module!");
if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
  message.delete();
  }

}
module.exports.help = {
    name:"test"
  }
  