import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { getEventByLocation } from '../services/EventsAPI';
import { getAllLocations } from '../services/LocationsAPI';
import "../css/LocationEvents.css"

const LocationEvents = () => {
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationData = await getAllLocations();
                setLocation(locationData.find(loc => loc.id === Number(id)));
                const eventsData = await getEventByLocation(id);
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching location and events:", error);
            }
        };

        fetchData();
    }, [id]);

    const getCountdown = (eventDate) => {
        const now = moment();
        const then = moment(eventDate);
        const countdown = moment.duration(then.diff(now));
        return `${countdown.days()} days, ${countdown.hours()} hours, ${countdown.minutes()} minutes`;
    };

    return (
        <div className='location-events'>
            {location ? (
                <>
                    <header>
                        <div className='location-image'>
                            {location.image ? <img src={location.image} alt={location.name} /> : <p>Loading...</p>}
                        </div>
                        <div className='location-info'>
                            <h2>{location.name}</h2>
                            <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                        </div>
                    </header>
    
                    <main>
                        {
                            events && events.length > 0 ? events.map(event => (
                                <div key={event.id} className={new Date(event.date) < new Date() ? 'past-event' : ''}>
                                    <h3>Hackathon Name: {event.title}</h3>
                                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                                    <p>Countdown: {getCountdown(event.date)}</p>
                                    <p>Description: {event.description}</p>
                                </div>
                            )) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                        }
                    </main>
                </>
            ) : (
                <p>Loading location data...</p>
            )}
        </div>
    );
    
}

export default LocationEvents;
