// Events.jsx
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getEventByLocation } from '../services/EventsAPI';

const LocationDetailPage = ({ match }) => {
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

    const getCountdown = (eventDate) => {
        const now = moment();
        const then = moment(eventDate);
        const countdown = moment.duration(then.diff(now));

        return `${countdown.days()} days, ${countdown.hours()} hours, ${countdown.minutes()} minutes`;
    }

    return (
        <div>
            <h2>Events at Location {locationId}</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                        <p>Countdown: {getCountdown(event.date)}</p>
                        <p>Description: {event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LocationDetailPage;
