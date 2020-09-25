const { Channel } = require("discord.js")

exports.run = function(bot,message,args){
    message.channel.setRateLimitPerUser(5);
}