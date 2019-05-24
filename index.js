const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
    console.log(`BabyRio Loaded! Playing In ${client.guilds.size} Servers`)
});
const activities_list = [
    "with BabyOri", 
    `in ${client.guilds.size} Servers!`,
    "with Discord", 
    "on BabyOri's Phone",
    "Fighting BabyOri"
    ];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 20000);
});
client.on('message', message => {
    if (message.content === 'Rio') {
        message.channel.send(`BabyRio is working in ${client.guilds.size} servers!`)
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
        message.reply('Considering you\'re speaking to me, Shit honestly');
    } else if (message.content.startsWith(`${prefix} Who do you love?`)) {
        message.reply('Oribuuin & Baby Ori!');
    } else if (message.content.startsWith(`${prefix} Who are your friends?`)) {
        message.reply('My Brother Baby Ori!');
    } else if (message.content.startsWith(`${prefix} What is the meaning of`)) {
        message.reply('How the fuck am I supposed to know?');
    } else if (message.content.startsWith(`Are we good ${prefix}`)) {
        message.reply('Yeah, I just felt a bit sick :nauseated_face:');
    } else if (message.content.startsWith(`What do you think ${prefix}`)) {
        message.reply('<:thonk:554462737166499840>');
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
        .addField("Want to invite your friends to this server?", "https://discord.gg/4p3gGwg", true);
       
        message.channel.send({embed});
    }
});
client.on('message', message => {
    if (message.content === 'RioAnnouncement') {
        message.channel.send('**Announcement**');
    }
});//Welcome Message
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋newplayers');
    if (!channel) return;
    channel.send(`Welcome to the server ${member} If you need help feel free to ask for assistance!\nBot Prefixes:\nBabyRio [Rio]\nBabyOri [Ori]\nType 'OriGithub' for Oribuin's Github!`);
});
client.login('Bot-Token')
