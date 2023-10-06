import React, { useState, useEffect } from 'react';
import { getEventByLocation } from '../services/EventsAPI';

const Events = ({ match }) => {
    const [events, setEvents] = useState([]);
    const locationId = match.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEventByLocation(locationId);
                setEvents(data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchData();
    }, [locationId]);

    return (
        <div>
            <h2>Events in {locationId}</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        {event.title} on {new Date(event.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events;
