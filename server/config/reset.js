import { pool } from './database.js';

const createTables = async () => {
    try {
        // Create locations table
        await pool.query(`
        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL UNIQUE,
            image TEXT,
            address TEXT,
            city TEXT,
            state TEXT,
            zip TEXT
        );
    `);

        // Create events table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
                title TEXT NOT NULL,
                description TEXT,
                date TIMESTAMP NOT NULL
            );
        `);

        console.log("Tables created successfully!");

    } catch (err) {
        console.error("Error creating tables: ", err);
    }
};

createTables();
