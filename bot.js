const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame()
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
@here < @everyone 

:moneybag: 10 Invites - 5k
:moneybag: 15 Invites - 10k
:moneybag: 25 Invites -  20k
:moneybag: 30 Invites -  30k
:moneybag: 45 Invites -  40k
:moneybag: 55 Invites -  50k
:moneybag: 65 Invites -  60k
:moneybag: 78 Invites -  70k
:moneybag: 90 Invites - 90k
:moneybag: 150 Invites -  150k
:moneybag: 200 Invites -  190k
:moneybag: 250 Invites - 230k
                               [ https://discord.gg/Y7S2BJu ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)  
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

:moneybag: 10 Invites - 5k
:moneybag: 15 Invites - 10k
:moneybag: 25 Invites -  20k
:moneybag: 30 Invites -  30k
:moneybag: 45 Invites -  40k
:moneybag: 55 Invites -  50k
:moneybag: 65 Invites -  60k
:moneybag: 78 Invites -  70k
:moneybag: 90 Invites - 90k
:moneybag: 150 Invites -  150k
:moneybag: 200 Invites -  190k
:moneybag: 250 Invites - 230k
                               [ https://discord.gg/Y7S2BJu ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)  
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
