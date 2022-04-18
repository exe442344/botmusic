const {MessageEmbed} = require('discord.js');

module.exports = { 
    name: 'messageCreate',
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     */
    execute(message,client) {
        var prefix = '&'
        
        if(message.author.bot) return
        if(!message.content.startsWith(prefix)) return

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
    
        const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.alias && cmd.alias.includes(command));

          if(!message.member.permissions.has(cmd.permisos || [] )) {
            const EmbedPermiso = new MessageEmbed()
            .setDescription(`No tienes permisos para usar este comando. Necesitas los siguientes permisos, ${cmd.permisos}`)
            .setColor("RED")
            return message.reply({embeds:[EmbedPermiso]})
          }

        try {
            cmd.execute(client,message, args);
        } catch (error) {
            console.error(error);
            message.reply('ha ocurrido un error, por favor contacta con un administrador (!support)');
        }
    }
}