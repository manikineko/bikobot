const Discord = require('discord.js');
module.exports.run  = function(client,message,args){
if(message.guild.members.resolve(message.author.id).permissions.has('MANAGE_CHANNELS')||message.guild.members.resolve(message.author.id).permissions.has('ADMINISTRATOR')){
if(args.length >= 1){
   message.channel.threads.create({
    name: `${args[0]}`,
    autoArchiveDuration: 60,
    reason: `${args[1]}`,
  }).then(() => {
    
  const thread = message.channel.threads.cache.find(x => x.name === `${args[0]}`);
  console.log(`Created thread: ${thread.name}`);
  message.reply(`Created thread: ${thread.name}`);
  thread.members.add(`${message.author.id}`);
  })
 
}
else
{
  message.reply("⚠️Channel Made⚠️").delete({ timeout: 10000,reason:"[Automated Message Deletion]" });
}
message.reply("🪄Channel Made🪄").delete({ timeout: 10000,reason:"[Automated Message Deletion]" });
}
else
{
  message.reply("🚫Access Denied🚫").delete({ timeout: 10000,reason:"[Automated Message Deletion]" });
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
    name:"mkthread"
  }
  