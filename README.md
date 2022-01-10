# TFC Discord Boost Detector 🟣
### Usage: 
**🔴Make Sure You Do Not Forget To Enable Both Of The Privileged Gateway Intents In The Discord Developer Portal🔴**
**`npm i tfc-discordboost`**
```js
const Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767 })
const { boost } = require('tfc-discordboost')
boost(client) //For The Package To Create The Event

client.on('boostMemberAdd', (member) => {
    let channel = member.guild.channels.cache.get('channelid')
    if (!channel) return
    channel.send(`${member} Just Boosted The Server`)
})

client.on('boostMemberRemove', (member) => {
    let channel = member.guild.channels.cache.get('channelid')
    if (!channel) return
    channel.send(`${member} Just Removed The Server Boost`)
})

client.login('token')
```
if any help is needed you can contact me on discord: TFC ! Mahmoud#1149

### Copyrights ✨
This Project Is An Open Source Project And No Need To Put Copyrights For It
