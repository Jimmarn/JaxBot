const Discord = require('discord.js');
const token = process.env.BOT_TOKEN;

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bob is ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong no more...');
  	}
});

client.login(token);
