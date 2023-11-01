import { bot } from '../../../src/bot'
import { webhookCallback } from 'grammy'

export const POST = webhookCallback(bot, 'std/http')
