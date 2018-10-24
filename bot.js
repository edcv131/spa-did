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
:moneybag:10 Invites - $2
:moneybag:15 Invites - $5
:moneybag:25 Invites - $7
:moneybag:30 Invites - $11 and Exclusive Giveaway Access
:moneybag:45 Invites - $17
:moneybag:55 Invites - $30 and a Custom Role
:moneybag:65 Invites - $37
:moneybag:78 Invites - $48
:moneybag:90 Invites - $60
:moneybag:150 Invites - $90
:moneybag:200 Invites - $105
:moneybag:250 Invites - $110
Invite rewards do not stack, once you claim, your invites will be reset.(edited)..
                               [ https://discord.gg/cvaXGFJ ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)  
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

:moneybag:10 Invites - $2
:moneybag:15 Invites - $5
:moneybag:25 Invites - $7
:moneybag:30 Invites - $11 and Exclusive Giveaway Access
:moneybag:45 Invites - $17
:moneybag:55 Invites - $30 and a Custom Role
:moneybag:65 Invites - $37
:moneybag:78 Invites - $48
:moneybag:90 Invites - $60
:moneybag:150 Invites - $90
:moneybag:200 Invites - $105
:moneybag:250 Invites - $110
Invite rewards do not stack, once you claim, your invites will be reset.(edited)..
                               [ https://discord.gg/cvaXGFJ ] 
 :small_blue_diamond: الرابط : :small_blue_diamond: ... [ ${member}  ]
**`)  
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
