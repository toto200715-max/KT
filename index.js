const { Client, GatewayIntentBits, Collection, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences
    ]  
  });
//  process.on("uncaughtException", (err, origin) => { return; })
//  process.on('uncaughtExceptionMonitor', (err, origin) => { return; });
//  process.on("unhandledRejection", (err, promise) => { return; })
//  process.on('multipleResolves', (type, promise, reason) => { return; });
client.Prefix = '+'
  client.Çɱɗ = new Collection()
  client.Çʍɗ = new Collection()
  const fs = require('fs')
  fs.readdirSync(`${process.cwd()}/Handler/`).forEach((Handler) => {
      require(`${process.cwd()}/Handler/${Handler}`)(client)
  })

  const pro = require('pro.db')
  client.on('messageCreate', function(message) {
      try {
      const line = pro.get(`lines_${message.guild.id}`)
      const autoline = pro.get(`Channels_${message.guild.id}`)
      if(!autoline){
       return;
        }
        if (autoline.includes(message.channel.id)) { 
        if (message.author.bot) return;
       if (!message.guild) return;
        message.channel.send({files: [line]}).catch((err) => {})
         } } catch  {return;}});
         
  
  client.login("")
