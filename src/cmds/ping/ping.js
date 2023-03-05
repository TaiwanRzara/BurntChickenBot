import { SlashCommandBuilder } from "discord.js";
import {} from '@/config/data'
export const command= new SlashCommandBuilder().setName('ping').setDescription("ping Command")
export const action=async(ctx)=>{
	ctx.reply("pong")
}