const config = require("./config.json");
const token = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true,intents: Discord.Intents.ALL});
bot.commands = new Discord.Collection();
const { MessageActionRow, MessageButton } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const buttonresponce = require("./buttons");
module.exports.buttonresponce = async function(client,interaction)
{
const guild =interaction.guild;
const member = interaction.guild.members.cache.get(interaction.member.user.id);
const voiceChannel = member.voice.channel;
	switch(interaction.customID)
  {
    default:
      await interaction.update('A unkown button was clicked!', { components: [] });

    case "test":
      var but = new MessageButton()
      .setCustomID('test')
      .setLabel('Test')
      .setStyle('PRIMARY');
      but.disabled = true;
      const row = new MessageActionRow().addComponents(
				but,
			);
      
      await interaction.update('A button was clicked!', { components: [row] });
      case "youtube":
        if(member.voice.channel){
        client.discordTogether.createTogetherCode(member.voice.channel.id, 'youtube').then(async invite => {
          await interaction.update(`${invite.code}`);
        });
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
        }
        case "chess":
          if(member.voice.channel){
          client.discordTogether.createTogetherCode(member.voice.channel.id, 'chess').then(async invite => {
            await interaction.update(`${invite.code}`);
          });
        }
        else{
          interaction.channel.send(`<@${member.id}> your not in an voice channel`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
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
          }
}