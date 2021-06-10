const config = require("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
var gifit = require('gifit');
const bot = new Discord.Client({disableEveryone: true,intents: Discord.Intents.ALL});
bot.commands = new Discord.Collection();
const { MessageActionRow, MessageButton,MessageAttachment} = require('discord.js');
const { DiscordTogether } = require('discord-together');
const buttonresponce = require("./buttons");
var Youtube = require("ytdl-core");
module.exports.buttonresponce = async function(client,interaction)
{
const guild =interaction.guild;
const member = interaction.guild.members.cache.get(interaction.member.user.id);
const voiceChannel = member.voice.channel;



	switch(interaction.customID)
  {
    default:
      await interaction.update('A unkown button was clicked!', { components: [] });

   
      case "youtube":
        if(member.voice.channel){
        client.discordTogether.createTogetherCode(member.voice.channel.id, 'youtube').then(async invite => {
          await interaction.update(`${invite.code}`);
        });
        break;
      }
    
        case "poker":
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'poker').then(async invite => {
            await interaction.update(`${invite.code}`);
          });
        }
        else{
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
          break;
        }
        case "chess":
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'chess').then(async invite => {
            await interaction.update(`${invite.code}`);
          });
          break;
        }
        else{
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
          break;
        }
        case "betrayal":
          if(member.voice.channel){
            client.discordTogether.createTogetherCode(member.voice.channel.id, 'betrayal').then(async invite => {
              await interaction.update(`${invite.code}`);
            });
          }
          else{
            interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
              setTimeout(() => msg.delete(), 1000)
            })
          }
          break;
        case "fishing":
          if(member.voice.channel){
              client.discordTogether.createTogetherCode(member.voice.channel.id, 'fishing').then(async invite => {
                await interaction.update(`${invite.code}`);
              });
            }
            else{
              interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
                setTimeout(() => msg.delete(), 1000)
              })
            }
            break;
            case "delmsg":
              interaction.message.delete();
              
            break;
            case "ban":
              var filter = m => interaction.guild.members.resolve(m.author.id).permissions.has("BAN_MEMBERS");
              interaction.update(`Please mention an member to ban(If you have ban permisisons)`, { components: [] });
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
              if(interaction.guild.members.resolve(interaction.user.id).permissions.has("ADMINISTRATOR")){
              await interaction.update(`⚠Initializing Channel Lockdown⚠`);
              interaction.message.reply("Please Hold by While we get things fixed on our end");
              interaction.message.channel.updateOverwrite(interaction.message.channel.guild.roles.everyone, { VIEW_CHANNEL: false, SEND_MESSAGES: false });
              }
            break;
            case "ytdl":
              
              /*
              var filter = m => interaction.guild.members.resolve(m.author.id).permissions.has("EMBED_FILES");
              interaction.update(`Please send an youtube link and I will make u an mp4 if u have File permissions`, { components: [] });
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
             interaction.update("Feature Disabled!")
            break;
            case "kick":
              var filter = m => interaction.guild.members.resolve(m.author.id).permissions.has("KICK_MEMBERS");
              interaction.update(`Please mention an member to kick(If you have ban permisisons)`, { components: [] });
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