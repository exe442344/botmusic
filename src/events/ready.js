const { Client, Message, Collection, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(client, message) {

		console.log(`Conectado como ${client.user.tag}`);
		 	
		client.user.setActivity(`Life Letters`, { type: `LISTENING` });
		client.user.setStatus('dnd'); 

		const channel = client.channels.cache.get('959233570789031946');
		const upembed = new MessageEmbed() 
		.setColor('RANDOM')
		.setDescription(`Me acaban de Prender y/o Reiniciar`) 
		.setTimestamp()
		channel.send({embeds: [upembed]})
	
	},
};