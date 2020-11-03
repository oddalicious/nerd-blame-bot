import Discord from 'discord.js'
import dotenv from 'dotenv'

const listOfNerdNames = ['wow', 'world of warcraft', 'warcraft', 'vampire live']

dotenv.config()

var client = new Discord.Client()

client.login(process.env.TOKEN)

client.on('ready', (e) => {
    console.info('Connected')
    console.info(`Logged in as: ${client.user.tag}`)
})

client.on('voiceStateUpdate', (_oldState, newState) => {
    const { channel } = newState
    const { member } = newState

    if (channel.name) {
        const { name } = channel

        if (listOfNerdNames.includes(name.toLowerCase())) {
            member.send('Stop being a nerd')
        }
    }
})
