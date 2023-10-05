// Fetch all locations.
// Maybe later: Add, Update, and Delete locations.

import { pool } from '../database.js';

export const getAllLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch locations.' });
    }
};
