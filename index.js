const { Client, RichEmbed } = require('discord.js');
const bot1 = new Client();
const bot2 = new Client();
const bot3 = new Client();
const bot4 = new Client();
const bot5 = new Client();
const settings = require('./settings.json');
const delay = 3000;
const delay2 = 10000;

var m = 1;

bot1.on('ready', ()=>{
    console.log(`\x1b[32m ${bot1.user.tag}`);

    bot1.setInterval(()=>{
        bot1.channels.get('765755517585981470').send(`${m}`);
        m++;
    }, delay2);
});

bot2.on('ready', ()=>{
    console.log(`\x1b[32m ${bot2.user.tag}`);

    bot2.setInterval(()=>{
        bot2.channels.get('765755517585981470').send(`${m}`);
        m++;
    }, delay);
});

bot3.on('ready', ()=>{
    console.log(`\x1b[32m ${bot3.user.tag}`);

    bot3.setInterval(()=>{
        bot3.channels.get('765755517585981470').send(`${m}`);
        m++;
    }, delay);
});

bot4.on('ready', ()=>{
    console.log(`\x1b[32m ${bot4.user.tag}`);

    bot4.setInterval(()=>{
        bot4.channels.get('765755517585981470').send(`${m}`);
        m++;
    }, delay);
});

bot5.on('ready', ()=>{
    console.log(`\x1b[32m ${bot5.user.tag}`);
    console.log(`\x1b[33m ============================================================================`);

    bot5.setInterval(()=>{
        bot5.channels.get('765755517585981470').send(`${m}`);
        m++;
    }, delay);
});

bot1.login(settings.token1);
bot2.login(settings.token2);
bot3.login(settings.token3);
bot4.login(settings.token4);
bot5.login(settings.token5);