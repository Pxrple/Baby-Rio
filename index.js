const Discord = require('discord.js');
const config = require('./config.json');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');


client.on('ready', () => {
    console.log(`=======================\nBot Loaded: BabyRio\nServers in: ${client.guilds.size}\n=======================`)
});
const presence_list = [
    "with BabyOri 💕", 
    "with Discord 💕", 
    "on My phone 💕",
    "Fighting BabyOri 😡",
    "Skyblock on Goli 💕",
    "Discord.js 💕",
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (presence_list.length - 1) + 1);
        client.user.setActivity(presence_list[index]);
    }, 20000);
});
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
client.on('message', message => {
    if (message.content.startsWith(`${prefix} ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix} beep`)) {
        message.channel.send('Boop.');
    } else if (message.content.startsWith(`${prefix} Friends?`)) {
        message.channel.send('Sure! ');
    } else if (message.content.startsWith(`${prefix} How are you?`)) {
        message.reply('I am good!');
    } else if (message.content.startsWith(`${prefix} Who do you love?`)) {
        message.reply('Oribuin & Baby Ori!');
    } else if (message.content.startsWith(`${prefix} Who are your friends?`)) {
        message.reply('My Brother Baby Ori!');
    } else if (message.content.startsWith(`${prefix} What is the meaning of`)) {
        message.reply('How the fuck am I supposed to know?');
    } else if (message.content.startsWith(`Are we good ${prefix}`)) {
        message.reply('Yeah, I just felt a bit sick :nauseated_face:');
    } else if (message.content.startsWith(`What do you think ${prefix}`)) {
        message.reply('<:thonk:554462737166499840>');
    } else if (message.content.startsWith(`Sell wand`)) {
        message.reply('No Sell Wands!');
    } else if (message.content.includes('#github')) {
        message.channel.send('Here you go :) https://github.com/Oribuin/')
    } else if (message.content.includes('#discord')) {
        message.channel.send('Discord Invite: https://discord.gg/c5JgrnA');
	} else if (message.content.startsWith(`${prefix} go commit die`)) {
        message.channel.send('<a:kms:586611139761275047>');
    } else if(message.author.id === '345406020450779149') {
        if (message.content.startsWith('<:PanLove:413844320500580362>'))
        message.channel.send('<:Pan_Love:586613821418897408>')
    } else if (message.author.id === '345406020450779149') {
        if (message.content.startsWith('Oi'))
        message.channel.send('<:PanPolice:589141466727841793>')
    } else if (message.author.id === '345406020450779149') {
        if (message.content.includes('wot'))
        message.channel.send('<:PanWot:589141480501805240>')
    } else if (message.content.startsWith(`${prefix} flip`)) {
        message.channel.send('coming soon :wink:');
    } else if (message.content.startsWith(`${prefix} wheel`)) {
        message.channel.send(':cartwheel:');
    }
});
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
});//Announcements
client.on('message', message => {
    if(message.author.id === '345406020450779149') {
    if (message.content === 'RioAnnouncement')
        message.channel.send('Hey Everyone! <:Bri_Wave:579035075102900229>');
    }
});//Welcome Message 2 | 
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋new-players');
    const embed = new RichEmbed()
    .setAuthor("Goli Network\'s Official Discord!")
    .setTitle(`Welcome to Goli Network ${member.displayName}`)
    .setColor(0xF08080)
    .setDescription(`Welcome to the Goli Network Discord! Be sure to read all of our discord server rules in <#546873908687667200>!\n \nCheck our <#546873898059300867> channel for all of the new updates! Enjoy & Have fun!\nDon't forget to link your account!`)
    .setURL("http://golimc.craftingstore.net")
    .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
    .setFooter("Type /discord link on golinetwork.online Hub & follow the instructions to link your account!")
    .addBlankField(true)
    .setThumbnail(`${member.user.avatarURL}`)
    .addField("Join our Minecraft Server!",
    ">> golinetwork.online <<")
  .addField("Want to invite your friends to this server?", "[Discord Invite](https://discord.gg/c5JgrnA)", true)
  .addField("Check for our server updates on our twitter!", "[Twitter](https://twitter.com/GoliNetwork)", true);

    if (!channel) return;
    channel.send({embed});
});
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'leaves');
    if (!channel) return;
    channel.send(`${member.displayName} Just left the server...`)
})
client.on('message', message => {
    if (message.content === 'RioAdvert') {
        const embed = new RichEmbed()
        .setTitle('BabyRio Bot by Oribuin')
        .setURL('https://github.com/Oribuin/')
        .setAuthor('Goli Network - MC Server - 1.8-1.14')
        .setDescription('__What is Goli Network?__ \n**Goli Network is a custom made minecraft server with new features added everyday! We use a number of premium plugins & custom codes to make the experience amazing for __everyone__!**')
        .addBlankField(true)
        .addField("**We currently have Skyblock released aswell as Factions & KitPvP being in the works and getting released very soon so keep an eye out for any of our server updates!**", "[Store](http://golimc.craftingstore.net/)")
        .addField("Take a look at BabyOri & BabyRio's Github to know all the Commands available with this bot.", "[GitHub](https://github.com/Oribuin/)", true)
        .addBlankField(true)
        .setImage("https://cdn.discordapp.com/attachments/568862020594565130/580826398193614858/GoliLogo.png")
        .addField("Join our Minecraft Server!",
        ">> golinetwork.online <<")
      .addField("Want to invite your friends to this server?", "[Discord Invite](https://discord.gg/c5JgrnA)", true)
      .addField("Check for our server updates on our twitter!", "[Twitter](https://twitter.com/GoliNetwork)", true)
      .setColor(0xF08080)

    message.channel.send({embed});
    }
});//Help Shit
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
        .setImage('https://cdn.discordapp.com/attachments/570699291585151017/582409246382227476/smile-shadow.png')

        message.channel.send({embed});
    }
});
client.on('message', message => {
    if (message.content.startsWith(`${prefix} Favorite Color`)) {
        const embed = new RichEmbed()
        .setAuthor('Baby Rio\'s Favorite Color :)')
        .setDescription('Light Coral (Red)\nHex Code: #F08080')
        .setColor(0xF08080)
        
        message.channel.send({embed});
    }
});//SpareShit
client.on('message', message => {
    if (message.content.startsWith(`!su`)) {
        const embed = new RichEmbed()
        .setAuthor('New Suggestion')
        .setTitle('Upvote | Downvote')
        .setColor(0x008080)
        .setDescription('Suggest Features to our server with:\n ``!s <suggestion>``')
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addBlankField(true)
        .addField('**Suggestion:**',
        `${message.author.lastMessage}`)

        message.channel.send({embed})
        message.channel.send(`NEW SUGGESTION BY ${message.author}`)
    } else if (message.content.includes(`NEW SUGGESTION BY`)) {
        message.react('👍');
        message.react('👎');
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

    }
});
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
client.login(config.token)
