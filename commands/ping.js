const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
               message.channel.send('pong');
               if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
                message.delete();
                }
}

module.exports.help = {
  name:"ping"
}
