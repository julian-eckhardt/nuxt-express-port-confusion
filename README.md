# nuxt-express-port-confusion

Repository to showcase bug where nuxt does not start because of port already in use.
The problem seems to be that the nuxt server does not properly handle `EADDRINUSE` error thrown by express when port is already in use.

## How to reproduce

1. run `npm install` in both app directories
2. cd into `express-app` and run `npm run start`
3. open second terminal, cd into `nuxt-app` and run `npm run dev`

## What is expected?

Nuxt reports successful startup of server, so a normal behaviour (i.e. the demo nuxt app showing up) is expected.
On a technical level, nuxt should choose a random port under these circumstances and report it to the user.

## What is actually happening?

Nuxt reports successful startup of server, but cannot bind to the port.
The user accesses the port and gets served the content provided by our second express server instead.
This behaviour is very unfortunate as the bare `Cannot GET /` error message provided by our express app
if it does not contain an endpoint for `GET /` is easily misunderstood as a nuxt error.
