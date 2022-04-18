const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token } = require('./src/config.js')

//Collections
client.cooldowns = new Collection();
client.commands = new Collection();

//handler folders
['commands', 'events'].forEach(handler => {
    require(`./src/handler/${handler}.js`)(client);
});


client.login(token);