import{Events} from "discord.js"

export const event = {
    name:Events.ClientReady,
    once:false
}
export const action = (c) => {
        console.log(`Ready! Logged in as ${c.user.tag}`);
}
