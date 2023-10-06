import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getAllEvents } from '../services/EventsAPI';
import { getAllLocations } from '../services/LocationsAPI';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [filterLocation, setFilterLocation] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const eventData = await getAllEvents();
                const locationData = await getAllLocations();
                setEvents(eventData);
                setLocations(locationData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const getCountdown = (eventDate) => {
        const now = moment();
        const then = moment(eventDate);
        const countdown = moment.duration(then.diff(now));
        return `${countdown.days()} days, ${countdown.hours()} hours, ${countdown.minutes()} minutes`;
    }

    const filteredEvents = filterLocation ? events.filter(event => event.location_id === parseInt(filterLocation)) : events;

    return (
        <div>
            <h2>All Events</h2>
            
            <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                <option value="">Filter by Location</option>
                {locations.map(location => (
                    <option key={location.id} value={location.id}>{location.name}</option>
                ))}
            </select>

            <ul>
                {filteredEvents.map(event => (
                    <li key={event.id}>
                        <div className={new Date(event.date) < new Date() ? 'past-event' : ''}>
                            <h3>{event.title}</h3>
                            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                            <p>Countdown: {getCountdown(event.date)}</p>
                            <p>Description: {event.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllEvents;