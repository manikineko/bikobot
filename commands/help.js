/*
const Discord = require('discord.js');
module.exports.run  = function(client,message){
message.reply("The Commands are here: https://pastebin.com/X4sHwT1a");
message.delete();

}
module.exports.help = {
    name:"help"
  }
  */
  /*const Discord = require('discord.js');
  module.exports.run  = function(client,message){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle('Help')
    .setURL('https://discord.gg/ktsssCvTXR')
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription('Here some commands for you to use')
    .addFields(
      { name: 'b>avatar [member]', value: ' shows the avatar of someone or you in the guild', inline: true },
      { name: 'b>ban [member]', value: 'ban an guild member', inline: true },
      { name: 'b>say [message]', value: 'Say something using the bot(requires manage massages permission)', inline: true },
      { name: 'b>ping', value: 'pong', inline: true },
      { name: 'b>slowmode [number]', value: 'set the slowmode for the channel(0 for none)', inline: true },
      { name: 'b>activity', value: 'play an voice chat activity', inline: true },
      { name: 'b>test', value: 'hello world!', inline: true },
      { name: 'b>punnish', value: 'Currendly disabled', inline: true }, //b>punnish | punnish a user(Requires aditional permissions to use)
      { name: 'b>help', value: 'opens this', inline: true },
      { name: 'b>getmessage [messageid]', value: ' gets a message id(must be internal id)', inline: true },
      { name: 'b>mkchannel [name] [position]', value: 'make channel with a name at a certian position(might be excluded to default to bottom)', inline: true },
      { name: 'b>mkthread [name] ', value: 'make thread with a name', inline: true },
      { name: 'b>rawsay ', value: 'blocked dev command', inline: true },
    )
    .addField('Embed and bot is Copyright © Bloom Sirenix#6090 made for', client.user.username+" running on " + client.guilds.cache.size + " servers with " + client.users.cache.size + " users in total", true)
    .setImage(client.user.avatarURL)
    .setTimestamp()
    .setFooter("executed by "+message.author.username, message.author.avatarURL);
  
  message.channel.send(helpEmbed);
  if (message.guild.me.permissions.has("MANAGE_MESSAGES")){
    message.delete();
    }
  
  }
  module.exports.help = {
      name:"help"
    }
    */







const Discord = require("discord.js");
const { disbut, MessageActionRow, MessageButton } = require("discord-buttons");

module.exports.help = {
    name:"help"
  },
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `**__Biko's Help Menu__**\n\nemoji here - Utility\nemoji here - Fun\nemoji here - Misc\nemoji here - Moderation\nemoji here - Activities`
      )
      .setFooter(
        "React with one of the following emojis to see the avaliable commands for that category!",
        message.author.displayAvatarURL()
      )
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL());

    const embed1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `emoji here __Utility Commands__ emoji here\n\n• Pu your list of commands here for this category.`
      )
      .setFooter(
        `Command Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );

    const embed2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `emoji here __Fun Commands__ emoji here\n\n• Put your list of commands here for this category.`
      )
      .setFooter(
        `Command Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );

    const embed3 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `emoji here __Misc Commands__ emoji here\n\n• Put your list of commands here for this category.`
      )
      .setFooter(
        `Command Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );

    const embed4 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `emoji here __Moderation Commands__ emoji here\n\n• Put your list of commands here for this category.`
      )
      .setFooter(
        `Command Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );

    const embed5 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `emoji here __Activity Commands__ emoji here\n\n• Put your list of commands here for this category.`
      )
      .setFooter(
        `Command Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL()
      );
    let button1 = new MessageButton()
      .setLabel(``)
      .setID(`help1`)
      .setEmoji(`emoji goes here`)
      .setStyle("blurple");

    let button2 = new MessageButton()
      .setLabel(``)
      .setID(`help2`)
      .setEmoji(`emoji goes here`)
      .setStyle("blurple");

    let button3 = new MessageButton()
      .setLabel(``)
      .setID(`help3`)
      .setEmoji(`emoji goes here`)
      .setStyle("blurple");

    let button4 = new MessageButton()
      .setLabel(``)
      .setID(`help4`)
      .setEmoji(`emoji goes here`)
      .setStyle("blurple");
    //if (!message.member.hasPermission("MANAGE_MESSAGES"))
    //button4.setDisabled(true);

    let button5 = new MessageButton()
      .setLabel(``)
      .setID(`help5`)
      .setEmoji(`emoji goes here`)
      .setStyle("blurple");

    let row = new MessageActionRow().addComponents(
      button1,
      button2,
      button3,
      button4,
      button5
    );

    const MESSAGE = await message.channel.send(embed, row);

    const filter = button => button.clicker.user.id === message.author.id;
    //const collector = MESSAGE.createButtonCollector(filter, { time: 120000 });
    const collector = MESSAGE.createButtonCollector(filter);

    collector.on("collect", async b => {
      if (b.id == "help1") {
        MESSAGE.edit(embed1, row);
        await b.reply.defer();
      }

      if (b.id == "help2") {
        MESSAGE.edit(embed2, row);
        await b.reply.defer();
      }

      if (b.id == "help3") {
        MESSAGE.edit(embed3, row);
        await b.reply.defer();
      }

      if (b.id == "help4") {
        MESSAGE.edit(embed4, row);
        await b.reply.defer();
      }

      if (b.id == "help5") {
        MESSAGE.edit(embed5, row);
        await b.reply.defer();
      }
    });
  }
};

module.exports.help = {
      name:"help"
    }
