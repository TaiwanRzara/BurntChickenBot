import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'
const fs=require("node:fs");
const path=require("node:path");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands=new Collection();
dotenv.config()
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TestToken);
