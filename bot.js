const Discord = require('discord.js');
const client = new Discord.Client();


client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));

let spam = msg.guild.channels.find('name', 'spam');
function timerFunc() {
    client.on('message', msg => {
        client.channels.find(spam).send(Math.random().toString(36).substring(7))


    });


if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN); 
