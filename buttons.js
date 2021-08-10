const config = require("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
var gifit = require('gifit');
const { MessageActionRow, MessageButton,MessageAttachment,Intents,Client} = require('discord.js');
var intent = Intents.resolve(4095);


const { DiscordTogether } = require('discord-together');
const buttonresponce = require("./buttons");
//var Youtube = require("ytdl-core");
module.exports.buttonresponce = async function(client,interaction)
{
  
  const embed = new Discord.MessageEmbed()
  .setDescription(
    `**__Biko's Help Menu__**\n\n<:cmddevonly:874719879729643541> - Moderation\nemoji here - Utility\nemoji here - Activities\nemoji here - Test\nemoji here - Misc`
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
    `<:cmddevonly:874719879729643541> __Moderation Commands__ <:cmddevonly:874719879729643541>\n\n• Put your list of commands here for this category.`
  )
  .setFooter(
    `Command Requested by: ${message.author.tag}`,
    message.author.displayAvatarURL()
  );

const embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(
    `<:config:874719879452831785> __Utility Commands__ <:config:874719879452831785>\n\n• Put your list of commands here for this category.`
  )
  .setFooter(
    `Command Requested by: ${message.author.tag}`,
    message.author.displayAvatarURL()
  );

const embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(
    `<:voicechannel:874719879729655838> __Activity Commands__ <:voicechannel:874719879729655838>\n\n• Put your list of commands here for this category.`
  )
  .setFooter(
    `Command Requested by: ${message.author.tag}`,
    message.author.displayAvatarURL()
  );

const embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(
    `<:terminal:874720756997689344> __Test Commands__ <:terminal:874720756997689344>\n\n• Put your list of commands here for this category.`
  )
  .setFooter(
    `Command Requested by: ${message.author.tag}`,
    message.author.displayAvatarURL()
  );

const embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(
    `<:biko:751986462819352626> __Misc Commands__ <:biko:751986462819352626>\n\n• Put your list of commands here for this category.`
  )
  .setFooter(
    `Command Requested by: ${message.author.tag}`,
    message.author.displayAvatarURL()
  );
let button1 = new MessageButton()
  .setLabel(``)
  .setCustomId(`help1`)
  .setEmoji(`<:cmddevonly:874719879729643541>`)
  .setStyle("PRIMARY");

let button2 = new MessageButton()
  .setLabel(``)
  .setCustomId(`help2`)
  .setEmoji(`<:config:874719879452831785>`)
  .setStyle("PRIMARY");

let button3 = new MessageButton()
  .setLabel(``)
  .setCustomId(`help3`)
  .setEmoji(`<:voicechannel:874719879729655838>`)
  .setStyle("PRIMARY");

let button4 = new MessageButton()
  .setLabel(``)
  .setCustomId(`help4`)
  .setEmoji(`<:terminal:874720756997689344>`)
  .setStyle("PRIMARY");
//if (!message.member.hasPermission("MANAGE_MESSAGES"))
//button4.setDisabled(true);

let button5 = new MessageButton()
  .setLabel(``)
  .setCustomId(`help5`)
  .setEmoji(`<:biko:751986462819352626>`)
  .setStyle("PRIMARY");

let row = new MessageActionRow().addComponents(
  button1,
  button2,
  button3,
  button4,
  button5
);
const guild =interaction.guild;
const member = interaction.guild.members.cache.get(interaction.member.user.id);
const voiceChannel = member.voice.channel;



	switch(interaction.customID)
  {
    default:
      interaction.deferUpdate();
      await interaction.editReply('A unkown button was clicked!', { components: [] });

      case  "help1":
        interaction.deferUpdate();
       interaction.editReply({embeds:[embed1], components: [row]});
      
    break;
    
    case "help2":
      interaction.deferUpdate();
       interaction.editReply({embeds:[embed2], components: [row]});
      
        break;
    
    case "help3":
      interaction.deferUpdate();
       interaction.editReply({embeds:[embed3], components: [row]});
      
        break;
    
    case "help4":
      interaction.deferUpdate();
       interaction.editReply({embeds:[embed4], components: [row]});
      
        break;
    
    case "help5":
      interaction.deferUpdate();
       interaction.editReply({embeds:[embed5], components: [row]});
      
        break;
      case "youtube":
        interaction.deferUpdate();
        if(member.voice.channel){
        client.discordTogether.createTogetherCode(member.voice.channel.id, 'youtube').then(async invite => {
          await interaction.editReply(`${invite.code}`);
        });
        break;
      }
    
        case "poker":
          interaction.deferUpdate();
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'poker').then(async invite => {
            await interaction.editReply(`${invite.code}`);
          });
        }
        else{
          interaction.deferUpdate();
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
          break;
        }
        case "chess":
          interaction.deferUpdate();
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'chess').then(async invite => {
            await interaction.editReply(`${invite.code}`);
          });
          break;
        }
        else{
          interaction.deferUpdate();
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
          break;
        }
        case "betrayal":
          interaction.deferUpdate();
          if(member.voice.channel){
            client.discordTogether.createTogetherCode(member.voice.channel.id, 'betrayal').then(async invite => {
              await interaction.editReply(`${invite.code}`);
            });
          }
          else{
            interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
              setTimeout(() => msg.delete(), 1000)
            })
          }
          break;
        case "fishing":
          interaction.deferUpdate();
          if(member.voice.channel){
              client.discordTogether.createTogetherCode(member.voice.channel.id, 'fishing').then(async invite => {
                await interaction.editReply(`${invite.code}`);
              });
            }
            else{
              interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
                setTimeout(() => msg.delete(), 1000)
              })
            }
            break;
            case "delmsg":
              interaction.deferUpdate();
              interaction.message.delete();
              
            break;
            case "ban":
              interaction.deferUpdate();
              var filter = m => interaction.guild.members.resolve(m.author.id).permissions.has("BAN_MEMBERS");
              interaction.editReply(`Please mention an member to ban(If you have ban permisisons)`, { components: [] });
              interaction.message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then(message => {
                message = message.first()
                if(interaction.guild.members.resolve(message.author.id).permissions.has("BAN_MEMBERS")){
                  var user = message.mentions.members.first();
                  interaction.guild.members.ban(user.id,{reason: `${message.author.id}|${message.content}`});
                  interaction.message.reply(`<@${user.id}> has been Banned by <@${message.author.id}>`)
                }
              })
              .catch(collected => {
                interaction.channel.send('Timeout');
              });
              
            break;
            case "lockchannel":
              interaction.deferUpdate();
              if(interaction.guild.members.resolve(interaction.user.id).permissions.has("ADMINISTRATOR")){
              await interaction.editReply(`⚠Initializing Channel Lockdown⚠`);
              interaction.message.reply("Please Hold by While we get things fixed on our end");
              interaction.message.channel.editReplyOverwrite(interaction.message.channel.guild.roles.everyone, { VIEW_CHANNEL: false, SEND_MESSAGES: false });
              }
            break;
            case "ytdl":
              
              /*
              var filter = m => interaction.guild.members.resolve(m.author.id).permissions.has("EMBED_FILES");
              interaction.editReply(`Please send an youtube link and I will make u an mp4 if u have File permissions`, { components: [] });
             await interaction.message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then(async message => {
                message = message.first()
                if(interaction.guild.members.resolve(message.author.id).permissions.has("EMBED_FILES")){
                 //  var user = message.mentions.members.first();
                  var video = Youtube(message.cleanContent); 
                  console.log(message.cleanContent)                
                   interaction.message.reply(`Generating`)
                    var fname = `./tmp/${message.author.id}_${Date.now()}`;
                   await video.pipe(fs.createWriteStream(fname+'.mp4'));

                     
                 await  message.channel.send(`<@${message.author.id}> here is your mp4`,{ files: [fs.createReadStream(fname+'.mp4')] } );
                 await  message.delete();
                
                  
                }
              })
              .catch(collected => {
                interaction.channel.send('Timeout');
              });
              */
             interaction.editReply("Feature Disabled!")
            break;
            case "kick":
              interaction.deferUpdate();
              var filter = m => interaction.guild.members.resolve(m.author.id).permissions.has("KICK_MEMBERS");
              interaction.editReply(`Please mention an member to kick(If you have ban permisisons)`, { components: [] });
              interaction.message.channel.awaitMessages(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
              })
              .then(message => {
                message = message.first()
                if(interaction.guild.members.resolve(message.author.id).permissions.has("KICK_MEMBERS")){
                  var user = message.mentions.members.first();
                  interaction.guild.members.kick(user.id,{reason: `${message.author.id}|${message.content}`});
                  interaction.message.reply(`<@${user.id}> has been Kicked by <@${message.author.id}>`)
                }
              })
              .catch(collected => {
                interaction.channel.send('Timeout');
              });
              
            break;

          }
}