////////////////////////////////////////////////////////////////
//Const                                                      //
//////////////////////////////////////////////////////////////
const Discord = require('discord.js');
const config = require('./config.json');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');

////////////////////////////////////////////////////////////////
//Console Logs                                               //
//////////////////////////////////////////////////////////////
client.on('ready', () => {
    console.log(`================\nBot Loaded: ${client.user.tag}\nBot Author: Ori#0004\nBot Version: 1.27\nServers: ${client.guilds.size}\n================`)
});
////////////////////////////////////////////////////////////////
//Discord Rich Presence                                      //
//////////////////////////////////////////////////////////////
const presence_list = [
    "with Baby Ella 💕", 
    "with Discord 💕", 
    "on My phone 💕",
    "Fighting BabyOri 😡",
    "Skyblock on Goli 💕",
    "Discord.js 💕",
    "Netflix 💕",
    "on golinetwork.online",
    "Jessica Jones 💕",
    "League of Legends 💕",
    "Megan Thee Estallion 💕",
    "Tiara Whack 💕"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        client.user.setActivity(presence_list[index]);
    }, 20000);
});
////////////////////////////////////////////////////////////////
//@BabyRio Shit                                              //
//////////////////////////////////////////////////////////////
const message_list = [
    "I don't know you....",
    "Are you a man or a woman?",
    "Sorry, Baby Rio Cant answer the call right now, Why? Because im trying to sleep! :rage:",
    "What?",
    "How many people does it take to make a singular earth?",
    "Don't hit me! :sob:",
    "Shut up and let me drink my hot chocolate :coffee:",
    "<:thonk:568875386243514398>",
    ":runner:"
    ];

client.on('message', message => {
        const index = Math.floor(Math.random() * (message_list.length - 1) + 1);
    if (message.content === '<@581203970203189269>') {
        message.channel.send(message_list[index]);
    }
});
////////////////////////////////////////////////////////////////
//Random Text                                                //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith(`${prefix} how are you?`)) {
        message.reply('I am good!');
    } else if (message.content.startsWith(`${prefix} who do you love`)) {
        message.reply('My Family! <:PanLove:413844320500580362>');
    } else if (message.content.includes('#github')) {
        message.channel.send('Here you go :) https://github.com/Oribuin/')
    } else if (message.content.includes('#discord')) {
        message.channel.send('Discord Invite: /discord');
    } else if (message.content.includes('#link')) {
        message.channel.send('Link your account to Goli Network Discord w/ /discord link')
    } else if (message.content.includes('#apply')) {
        message.channel.send('http://bit.ly/GoliApps')
    } else if(message.author.id === '345406020450779149') {
        if (message.content.startsWith('<:PanLove:413844320500580362>'))
        message.channel.send('<:Pan_Love:586613821418897408>')
    } else if (message.content.startsWith('<@581203970203189269> love me')) {
      message.reply(`I love you :heart: <:Pan_Love:586613821418897408>`);
    } else if (message.content.startsWith('<@581203970203189269> hug')) {
      message.channel.send('<:RioHug:591102792207433729>')
    } else if (message.content.startsWith(`${prefix} Avatar`)) {
      message.channel.send(`${message.author.avatarURL}`)
    } else if(message.author.id === '345406020450779149')
      if (message.content.startsWith('Oi')) {
      message.channel.send('<:PanCop:589141466727841793>')

    }
});
////////////////////////////////////////////////////////////////
//Rio Welcome message                                        //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content === 'RioWelcome') {
        const embed = new RichEmbed()
        .setTitle('Welcome to Goli Network\'s Official Discord!')
        .setAuthor("Goli Network's BabyRio & BabyOri - By Oribuin", "https://cdn.discordapp.com/attachments/353475877872599040/580064152001708052/image0.jpg")
        .setColor(0x008080)
        .setDescription("Welcome to the Official Goli Network Discord! Be sure to read all of our discord server rules in <#546873908687667200>! Keep your notifications on and check back in our discord server, as we have frequent updates and announcements in <#553475680973881345> & <#553475680973881345>! If you have any questions, Be sure to ask for help in <#546873898059300867>  or DM <#546874727835238401>! Keep it friendly & have fun!")
        .addField("Take a look at BabyOri & BabyRio's Github to know all the Commands available with this bot.", "https://github.com/Oribuin/", true)
        .addBlankField(true)
        .setFooter("Type /discord link on golinetwork.online Hub & follow the instructions to link your account!")
        .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
        .setURL("https://github.com/Oribuin/")
        .addField("Join our Minecraft Server!",
          ">> golinetwork.online <<")
        .addField("Want to invite your friends to this server?", "https://discord.gg/c5JgrnA", true);
       
        message.channel.send({embed});
    }
});
////////////////////////////////////////////////////////////////
//Announcements                                              //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if(message.author.id === '345406020450779149') {
    if (message.content === 'RioAnnouncement')
        message.channel.send('Hey Everyone! <:Bri_Wave:579035075102900229>');
    }
});
////////////////////////////////////////////////////////////////
//Welcome Message                                            //
//////////////////////////////////////////////////////////////
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋new-players');
    const embed = new RichEmbed()
    .setAuthor("Goli Network\'s Official Discord!")
    .setTitle(`Welcome to Goli Network, ${member.displayName}`)
    .setColor(0xF08080)
    .setDescription(`Welcome to the Goli Network Discord! Be sure to read all of our discord server rules in <#546873908687667200>!\n \nCheck our <#546873898059300867> channel for all of the new updates! Enjoy & Have fun!\nDon't forget to link your account!`)
    .setURL("http://golimc.craftingstore.net")
    .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
    .setFooter("Type /discord link on golinetwork.online & follow the instructions to link your account!")
    .addBlankField(true)
    .setThumbnail(`${member.user.avatarURL}`)
    .addField("Join our Minecraft Server!",
    ">> golinetwork.online <<")
  .addField("Want to invite your friends to this server?", "[Discord Invite](https://discord.gg/c5JgrnA)", true)
  .addField("Check for our server updates on our twitter!", "[Twitter](https://twitter.com/GoliNetwork)", true);

    if (!channel) return;
    channel.send({embed});
    console.log()
});
////////////////////////////////////////////////////////////////
//Member Leave                                               //
//////////////////////////////////////////////////////////////
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'leaves');
    if (!channel) return;
    channel.send(`${member.displayName} Just left the server...`)
});
////////////////////////////////////////////////////////////////
//Advertisement                                              //
//////////////////////////////////////////////////////////////
//client.on('message', message => {
//    if (message.content === 'RioAdvert') {
//        const embed = new RichEmbed()
//        .setTitle('BabyRio Bot by Oribuin')
//        .setURL('https://github.com/Oribuin/')
//        .setAuthor('Goli Network - MC Server - 1.8-1.14')
//        .setDescription('__What is Goli Network?__ \n**Goli Network is a custom made minecraft server with new features added everyday! We use a number of premium plugins & custom codes to make the experience amazing for __everyone__!**')
//        .addBlankField(true)
//        .addField("**We currently have Skyblock released aswell as Factions & KitPvP being in the works and getting released very soon so keep an eye out for any of our server updates!**", "[Store](http://golimc.craftingstore.net/)")
//        .addField("Take a look at BabyOri & BabyRio's Github to know all the Commands available with this bot.", "[GitHub](https://github.com/Oribuin/)", true)
//        .addBlankField(true)
//        .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
//        .addField("Join our Minecraft Server!",
//        ">> golinetwork.online <<")
//      .addField("Want to invite your friends to this server?", "[Discord Invite](https://discord.gg/c5JgrnA)", true)
//      .addField("Check for our server updates on our twitter!", "[Twitter](https://twitter.com/GoliNetwork)", true)
//      .setColor(0xF08080)
//
//    message.channel.send({embed});
//    }
//});
////////////////////////////////////////////////////////////////
//Help Commands                                              //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content === 'Rio Help') {
        const embed = new RichEmbed()
    .setTitle('GitHub Commands & Features')
    .setAuthor('Baby Bots\'s Commands', 'https://cdn.discordapp.com/attachments/353475877872599040/580064152001708052/image0.jpg')
    .setDescription('Githubs: Githubs')
    .addField("[BabyOri README.md Page]", "[>>Click Me<<](https://github.com/Oribuin/BabyOri/blob/master/README.md)", true)
    .addField("[BabyRio README.md Page]", "[>>Click Me<<](https://github.com/Oribuin/Baby-Rio/blob/master/README.md)", true)
    .addBlankField(true)
    .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
    .setURL("https://github.com/Oribuin/")
    .addField("Join our Minecraft Server!",
      ">> golinetwork.online <<")
    .addField("Want to invite your friends to this server?", "https://discord.gg/c5JgrnA", true)
    .setColor(0x008080);

    message.channel.send({embed});
    console.log()

    } else if (message.content === 'Rio') {
        const embed = new RichEmbed()
        .setTitle('GitHub Commands & Features')
        .setAuthor('Baby Bots\'s Commands', 'https://cdn.discordapp.com/attachments/353475877872599040/580064152001708052/image0.jpg')
        .setDescription("There isnt really many commands that you could do with BabyRio that aren't Ori's server related. You can @ BabyRio for a random response & Ask him questions...")
        .addField("[BabyOri README.md Page]", "[>>Click Me<<](https://github.com/Oribuin/BabyOri/blob/master/README.md)", true)
        .addField("[BabyRio README.md Page]", "[>>Click Me<<](https://github.com/Oribuin/Baby-Rio/blob/master/README.md)", true)
        .setURL("https://github.com/Oribuin/")
        .addField("Want to invite BabyRio?", "[Invite BabyRio](https://discordapp.com/oauth2/authorize?client_id=581203970203189269&permissions=53861440&scope=bot)")
        .setColor(0x008080)

        message.channel.send({embed});
        console.log()
    }
});
////////////////////////////////////////////////////////////////
//Favorite Color Shit                                        //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith(`${prefix} Favorite Color`)) {
        const embed = new RichEmbed()
        .setAuthor('Baby Rio\'s Favorite Color :)')
        .setDescription('Light Coral (Red)\nHex Code: #F08080')
        .setColor(0xF08080)
        
        message.channel.send({embed});
    }
});
////////////////////////////////////////////////////////////////
// SUGGESTIONS, BUG REPORTS & SERVER UPDATES                 //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith(`!su`)) {// 👍 👎
        const embed = new RichEmbed()
        .setAuthor('New Suggestion')
        .setTitle('Upvote | Downvote')
        .setColor(0x008080)
        .setDescription('Suggest Features to our server with:\n ``!su <suggestion>``')
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addBlankField(true)
        .addField('**Suggestion:**',
        `${message.author.lastMessage}`)
        .addField('Suggestion by:',
        `${message.author.tag}`)

        message.channel.send({embed}).then(sentEmbed => {
          sentEmbed.react("👍")
          sentEmbed.react("👎")
          message.delete()
    })
//      setTimeout(function() {
//        message.channel.send('Vote if you think this suggestion should be added');
//      }, 1000);
//    } else if (message.content.startsWith('Vote if you think this suggestion should be added')) {
//      message.react('👍')
//      message.react('👎')
    } else if (message.content.startsWith(`${prefix} Skyblock`)) {
        const embed = new RichEmbed()
        .setAuthor('- New Skyblock Updates -')
        .setTitle('+ Added | - Removed | / Working on')
        .setColor(0x008080)
        .setDescription('**Description**')

        message.channel.send({embed});
    } else if (message.content.startsWith(`!br`)) {
        const embed = new RichEmbed()
        .setAuthor('New Bug Report')
        .setTitle('BUG REPORT INCOMING')
        .setColor(0xF08080)
        .setDescription('New BUG REPORT - \n ``!br <bug>``')
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addBlankField(true)
        .addField(`**Bug Report**`,
        `${message.author.lastMessage}`)
        .addField(`*Bug Report By*:`,
         `${message.author.tag}`)

        message.guild.owner.send({embed});
        message.delete()
        message.author.send(`Hey @${message.author.tag}, Thank you for reporting the bug! It has been sent directly to Oribuin!`)
        console.log()

    }
});
////////////////////////////////////////////////////////////////
//Ban / Kick Player                                          //
//////////////////////////////////////////////////////////////
client.on('message', message => {
    if (!message.guild) return;
  
    if(message.author.id === '345406020450779149')
    if (message.content.startsWith('RioBanф')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'They were bad!',
          }).then(() => {
            message.reply(`Successfully banned ${user.tag}`);
            console.log()
          }).catch(err => {
            message.reply('I was unable to ban the member, Run Robin');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to ban!');
      }
    }
    if (!message.guild) return;
  
    if(message.author.id === '345406020450779149')
    if (message.content.startsWith('RioKickф')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick({
            reason: 'They were a cunt ;3',
          }).then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
            console.log()
          }).catch(err => {
            message.reply('I was unable to kick the member, Run Robin');
            console.error(err);
          });
        } else {
          message.reply('That user isn\'t in this guild!');
        }
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
////////////////////////////////////////////////////////////////
//Temporary Code                                             //
//////////////////////////////////////////////////////////////
//client.on('message', message => {
//   if (message.content.startsWith(`SuggestFormat`)) {
//    const embed = new RichEmbed()
//    .setAuthor('-=[Suggest Features Information]=-')
//    .setTitle('Suggest Features')
//    .setDescription('How to make a new Suggestion:\n \nType **!su <suggestion>** to make a suggestion, These will be put to poll in the channel for the server to vote.\n \nSpamming this feature will result in privilage to make suggestions revoked\nDo __NOT__ use this channel for anything other than Suggestions, Only type the command in here. Discuss the suggestion in<#546847417782370304>\n \n__Only type Suggestions in <#574366597515444244>__')
//    .setImage('https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png')
//    .setURL('https://github.com/Oribuin/')
//
//    message.channel.send({embed});
//   }
//});
////////////////////////////////////////////////////////////////
//Client Shit                                                //
//////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.author.id === '345406020450779149')
  if (message.content.startsWith(`${prefix} Idle`)) {
    client.user.setStatus("idle")
    message.channel.send('Idle Status | Activated')
    .then(console.log)
    .catch(console.error)
  }
  if(message.author.id === '345406020450779149')
  if (message.content.startsWith(`${prefix} DND`)) {
    client.user.setStatus("dnd")
    message.channel.send('Do Not Disturb Status | Activated')
    .then(console.log)
    .catch(console.error)
  }
  if(message.author.id === '345406020450779149')
  if (message.content.startsWith(`${prefix} Online`)) {
    client.user.setStatus("online")
    message.channel.send('Online Status | Activated')
    .then(console.log)
    .catch(console.error)
  }
  if (message.content.startsWith(`${prefix} Uptime`)) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    message.channel.send(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
  }
  if (message.content.startsWith(`${prefix} Version`)) {
    message.channel.send('Bot Version: 1.27')
  }
});
client.login(config.token)
