const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

bot.on(`ready`, () => {
    console.log(`Bot connected as ${bot.user.tag}`);
    bot.user.setStatus('dnd');

    console.log(bot.user.presence.status);

})

bot.on(`message`, message => {
    //Recibiendo mensaje
    console.log(message.content);

    if (message.content === 'ping') {
        message.reply('pong');
    }

    if (message.content === "hello") {
        message.channel.send(`Hola ${message.author}`);
    }

    if (message.content === '!test') {

        const channel = message.guild.channels.cache.find(ch => ch.name === 'general');
        const attach = new Discord.MessageAttachment('https://i.imgur.com/GPcyQik.png')

        channel.send(`${message.author},`, attach)
    }

    if (message.content === 'wima') {
        message.reply(message.author.displayAvatarURL());
    }

    if (message.content === '!hte') {
        const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('A slick little embed')
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription('Hello, this is a slick embed!');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }
})

bot.on("guildMemberAdd", newUser => {
    const embed = new MessageEmbed()
        .setTitle('Welcome msg')
        .setDescription(`Welcome to channel to testing bots in Discord ${newUser.nickname}`);

    newUser.guild.channels.get('general').send(embed);
})

bot.login('ODY1MDA4MDQ5MDE2OTMwMzM0.YO9vhQ._D3E1EmQA7deZvQ_H6OQyOfYsMk');