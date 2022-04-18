const fs = require("fs");

module.exports = (client) => {
  console.log("---------------------- COMANDOS ----------------------");
  const commandFolders = fs.readdirSync('./src/commands');

  for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`);
      client.commands.set(command.name, command);

      console.log(command.name, '>', command.description);
    }
  }
  console.log("---------------------- COMANDOS ----------------------");
};