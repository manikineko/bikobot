const config = require("./config.json");
const token = require("./token.json");
const { Client, APIMessage,Intents } = require("discord.js");
const { readdirSync } = require("fs");
const Commands = [];

const Discord = require("discord.js");
const fs = require("fs");
var intent = Intents.resolve(4095);
const bot =  new Client({ intents: [intent] });
bot.commands = new Discord.Collection();
const { MessageActionRow, MessageButton } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const buttons = require("./buttons");

bot.discordTogether = new DiscordTogether(bot);
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});
var client = bot;

bot.on('interactionCreate', async interaction => {
	if (interaction.isMessageComponent() && interaction.componentType == 'BUTTON')
  {
    await buttons.buttonresponce(bot,interaction);
      
  }
    else
    {
      return;
    }
    


});
//Add Role And Welcome New Member
bot.on('guildMemberAdd', member => {

});
bot.on("guildCreate", guild => {
  console.log("Joined a new guild: " + guild.name);
  bot.user.setActivity("with b>help on " + bot.guilds.cache.size + " servers with " + bot.users.cache.size + " users in total", {type: "PLAYING"});

  //Your other stuff like adding to guildArray
})

//removed from a server
bot.on("guildDelete", guild => {
  console.log("Left a guild: " + guild.name);
  bot.user.setActivity("with b>help on " + bot.guilds.cache.size + " servers with " + bot.users.cache.size + " users in total", {type: "PLAYING"});

  //remove from guildArray
})
//Playing Message
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
  bot.user.setActivity("with b>help on " + bot.guilds.cache.size + " servers with " + bot.users.cache.size + " users in total", {type: "PLAYING"});
});

//Command Manager
bot.on("messageCreate", async message => {

console.log(`${message.author.username}(${message.author.id})/${message.id}: ${message.content}`);
  try{
   let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  //Check for prefix
  if(cmd.startsWith(config.prefix) && !message.author.bot && message.channel.type != "dm"){

 
    
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
    
}
  }
  catch(e){
    message.channel.send(`<@${message.author.id}> Error ${e}!`)
  }
});
//Token need in token.json
bot.login(token.token);
