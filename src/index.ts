import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
const port = Number(process.env.PORT ?? 3000)

app.get('/', (c) =>
  c.html(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f7f7f5">
    <title>Hono / Node</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      :root {
        color-scheme: light;
        font-family: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-synthesis: none;
        color: #171717;
        background: #f7f7f5;
      }

      * { box-sizing: border-box; }

      body {
        min-width: 320px;
        min-height: 100dvh;
        margin: 0;
        -webkit-font-smoothing: antialiased;
      }

      main {
        display: flex;
        flex-direction: column;
        width: min(100% - 2.5rem, 64rem);
        min-height: 100dvh;
        margin: 0 auto;
        padding: 2rem 0;
      }

      .hero {
        display: grid;
        flex: 1;
        grid-template-columns: minmax(0, 1.35fr) minmax(18rem, .65fr);
        align-items: center;
        gap: clamp(3rem, 8vw, 7rem);
        padding: clamp(5rem, 14vh, 9rem) 0;
      }

      .panel-label {
        margin: 0;
        color: #737373;
        font-size: .7rem;
        letter-spacing: .14em;
        text-transform: uppercase;
      }

      h1 {
        max-width: 12ch;
        margin: 1.25rem 0 1.5rem;
        font-size: clamp(3.5rem, 9vw, 7rem);
        font-weight: 500;
        letter-spacing: -.075em;
        line-height: .9;
      }

      h1 span { color: #ff5b11; }

      .intro {
        max-width: 36rem;
        margin: 0;
        color: #525252;
        font-size: clamp(.85rem, 1.5vw, 1rem);
        line-height: 1.8;
      }

      .panel { border-top: 1px solid #171717; }

      .panel-label { padding: 1rem 0; }

      dl { margin: 0; }

      .row {
        display: grid;
        grid-template-columns: 5rem 1fr;
        gap: 1rem;
        padding: 1rem 0;
        border-top: 1px solid #d4d4d4;
        font-size: .75rem;
        line-height: 1.5;
      }

      dt {
        color: #a3a3a3;
        text-transform: uppercase;
      }

      dd {
        margin: 0;
        text-align: right;
      }

      code {
        padding: .18rem .35rem;
        color: #c2410c;
        background: #ffedd5;
      }

      @media (max-width: 700px) {
        main {
          width: min(100% - 2rem, 64rem);
          padding: 1.25rem 0;
        }

        .hero {
          grid-template-columns: 1fr;
          align-content: center;
          gap: 4rem;
          padding: 5rem 0;
        }

        h1 { font-size: clamp(3.5rem, 20vw, 5.5rem); }
      }
    </style>
  </head>
  <body>
    <main>
      <section class="hero">
        <div>
          <h1>Hello,<br><span>Hono.</span></h1>
          <p class="intro">The app is running and ready for a route. Start building in <code>src/index.ts</code>.</p>
        </div>

        <aside class="panel" aria-label="Request details">
          <p class="panel-label">Current request</p>
          <dl>
            <div class="row"><dt>Method</dt><dd>GET</dd></div>
            <div class="row"><dt>Route</dt><dd>/</dd></div>
            <div class="row"><dt>Runtime</dt><dd>Node.js</dd></div>
            <div class="row"><dt>Port</dt><dd>${port}</dd></div>
          </dl>
        </aside>
      </section>

    </main>
  </body>
</html>`),
)

serve({
  fetch: app.fetch,
  port,
})

console.log(`Server running at http://localhost:${port}`)
