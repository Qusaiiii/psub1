const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


client.on("message", msg => {  

if(msg.content.startsWith(prefix + `spamon`)) {

if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(':no_entry: | `Adminstrator`للاسف ليس لديك صلاحية يجي ان يكون لديك برمشن!');

let spam = msg.guild.channels.find('name', 'spam');

 if (!spam) return msg.channel.send('**`spam`يرجى اضافة روم باسم**' );
    function timerFunc() {
      spam.send(Math.random().toString(36).substring(7))


var timer = setTimeout(timerFunc, 1000);
client.login(process.env.BOT_TOKEN); 
