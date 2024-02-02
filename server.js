const express = require('express')
const ticketRouter = require('./ticketRouter')
const app = express()

app.use(express.json());

app.use('/api/v1/tickets', ticketRouter)

app.listen('3700', () => {
    console.log('listening on port 3700')
})