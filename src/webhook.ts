import { bot } from './bot'
import type { Server } from 'bun'
import { webhookCallback } from 'grammy'

// webhookCallback will make sure that the correct middleware(listener) function is called
export default {
    fetch: (request: Request) => {
        console.debug(request)
        console.debug(request.body)
        console.debug(request.json)
        return new Response('ok', {
            status: 200,
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
        })
    },
}
