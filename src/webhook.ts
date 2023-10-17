import { bot } from './bot'
import { type Server } from 'bun'
import { webhookCallback } from 'grammy/web'

// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, 'std/http')
