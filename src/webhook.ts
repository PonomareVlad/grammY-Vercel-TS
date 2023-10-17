import { bot } from './bot'
import type { Server } from 'bun'
import { webhookCallback } from 'grammy'

// webhookCallback will make sure that the correct middleware(listener) function is called
export default {
    fetch: async (request: Request) => {
        try {
            console.debug(await request.json())
        } catch (e) {
            console.error(e)
        }
        return new Response('ok', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
        })
    },
}
