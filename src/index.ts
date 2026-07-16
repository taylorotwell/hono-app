import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
const port = Number(process.env.PORT ?? 3000)

app.get('/', (c) => c.text('Hello, Hono!'))

serve({
  fetch: app.fetch,
  port,
})

console.log(`Server running at http://localhost:${port}`)
