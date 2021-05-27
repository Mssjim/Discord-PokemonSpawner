const { Client } = require('selfo.js');
const {channelId, spamMessage, delay, tokens} = require('./settings.json');

function login(id) {
    if(id > tokens.length) return;
    token = tokens[id-1];

    const client = new Client()
    .on('ready', () => {
        console.log(`${id} - \x1b[32m${client.user.tag}\x1b[0m`);
        client.flood(channelId, spamMessage, delay);
    });

    client.login(token).then(() => {
        if(id >= tokens.length) {
            const channel = client.channels.get(channelId);

            console.log(`─────────────────────────────────────────────────`);
            console.log(`${tokens.length} active users in \x1b[32m${channel.name}\x1b[0m!`); // TODO Check Invalid Tokens users
        }

        login(++id);
    }).catch(err => {
        if(err.message == "Incorrect login details were provided.")
            console.log(`${id} - \x1b[31mInvalid Token - Check and try again!\x1b[0m`);
        login(++id);
    });
}

login(1);
