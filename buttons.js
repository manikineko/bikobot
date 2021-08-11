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
const guild =interaction.guild;
const member = interaction.guild.members.cache.get(interaction.member.user.id);
const voiceChannel = member.voice.channel;



	switch(interaction.customID)
  {

/*
      case  "help1":
        await interaction.deferReply();
        
        await interaction.editReply({embeds:[embed1], components: [row]});
      
    break;
    
    case "help2":
      await interaction.deferReply();
      await interaction.editReply({embeds:[embed2], components: [row]});
      
        break;
    
    case "help3":
      await interaction.deferReply();
      await interaction.editReply({embeds:[embed3], components: [row]});
      
        break;
    
    case "help4":
      await interaction.deferReply();
      await interaction.editReply({embeds:[embed4], components: [row]});
      
        break;
    
    case "help5":
      await interaction.deferReply();
      await interaction.editReply({embeds:[embed5], components: [row]});
      
        break;
        */
      case "youtube":
       await interaction.deferReply();
        if(member.voice.channel){
        client.discordTogether.createTogetherCode(member.voice.channel.id, 'youtube').then(async invite => {
          await interaction.editReply(`${invite.code}`);
        });
        break;
      }
    
        case "poker":
         await interaction.deferReply();
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'poker').then(async invite => {
            await interaction.editReply(`${invite.code}`);
          });
        }
        else{
         await interaction.deferReply();
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
          break;
        }
        case "chess":
         await interaction.deferReply();
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'chess').then(async invite => {
            await interaction.editReply(`${invite.code}`);
          });
          break;
        }
        else{
         await interaction.deferReply();
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
          break;
        }
        case "betrayal":
         await interaction.deferReply();
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
         await interaction.deferReply();
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
             await interaction.deferReply();
              interaction.message.delete();
              
            break;
            case "ban":
             await interaction.deferReply();
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
             await interaction.deferReply();
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
             await interaction.deferReply();
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