const Discord = require('discord.js');
module.exports.run  = function(client,message,args){
  if(message.guild.members.resolve(message.author.id).permissions.has('MANAGE_CHANNELS')||message.guild.members.resolve(message.author.id).permissions.has('ADMINISTRATOR')){

if(args.length >= 1){
  message.guild.channels.create(args[0],{
    name: args[0],
    type: args[2]?? 'text',
    position: parseInt(args[1]??"0"),
    permission_overwrites: [],
    nsfw: Boolean(args[4])??false,
    parent_id: args[3]
  });
  
}
else
{
  message.reply("⚠️Channel Made⚠️");
}
message.reply("🪄Channel Made🪄");
}
else
{
  message.reply("🚫Access Denied🚫");
}
/*
message.channel.edit({
    name: args[0],
    icon: null,
    recipients: [
      {
        username: "test",
        discriminator: "9999",
        id: "82198898841029460",
        avatar: "33ecab261d4681afa4d85a04691c4a01"
      },
      {
        username: "test2",
        discriminator: "9999",
        id: "82198810841029460",
        avatar: "33ecab261d4681afa4d85a10691c4a01"
      }
    ],
    last_message_id: "3343820033257021450",
    type: 3,
    id: "319674150115710528",
    owner_id: "82198810841029460"
  },args[0]);

*/


}
module.exports.help = {
    name:"mkchannel"
  }
  