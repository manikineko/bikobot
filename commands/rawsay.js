const Discord = require('discord.js');
module.exports.run  = function(client,message,args){
if(message.guild.members.resolve(message.author.id).permissions.has('ADMINISTRATOR')){
if(args.length >= 1){
  var argstr = "";
args.forEach(arg => {
  argstr = arg + " ";
});
message.channel.send(JSON.parse(argstr));


}
else
{
  message.reply("⚠️Get message⚠️").delete({ timeout: 10000,reason:"[Automated Message Deletion]" });
}

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
    name:"rawsay"
  }
  