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
    "on my phone!"
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
client.login('Bot-Token')
