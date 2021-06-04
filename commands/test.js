const Discord = require('discord.js');
module.exports.run  = function(client,message){
message.reply("Hello, Module!");
message.delete();

}
module.exports.help = {
    name:"test"
  }
  