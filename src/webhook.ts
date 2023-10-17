import { bot } from './bot'
import { webhookCallback } from 'grammy/web'

// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, 'std/http')
