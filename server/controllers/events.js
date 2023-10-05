// Fetch all events.
// Fetch events by location.
// Maybe later: Add, Update, and Delete events.


import { pool } from '../database.js';

export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events.' });
    }
};

export const getEventsByLocation = async (req, res) => {
    const locationId = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId]);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events by location.' });
    }
};
