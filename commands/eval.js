const Discord = require('discord.js');
const config = require("../config.json");
module.exports.run  = function(client,message,args){
if(config.owners.includes(message.author.id))
{
const code = args.join(" ");
let evaled = eval(code);
if (typeof evaled !== "string")
evaled = require("util").inspect(evaled);

//message.channel.send(evaled, {code:"xl"});

}
else
{
message.reply("❌Dev Command Disabled❌");
}
message.delete({reason:"Eval requested"});
}
module.exports.help = {
    name:"eval"
  }
  