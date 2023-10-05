import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import { getAllEvents, getEventsByLocation } from './controllers/events.js';
import { getAllLocations } from './controllers/locations.js';

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

// API routes
app.get('/api/events', getAllEvents);
app.get('/api/events/location/:id', getEventsByLocation);
app.get('/api/locations', getAllLocations);

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})
