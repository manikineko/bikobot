const config = require("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true,intents: Discord.Intents.ALL});
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

bot.on('interaction', async interaction => {
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

//Playing Message
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);

  bot.user.setActivity("My Code", {type: "PLAYING"});
});

//Command Manager
bot.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  //Check for prefix
  if(!cmd.startsWith(config.prefix)) return;
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});
//Token need in token.json
bot.login(token.token);
