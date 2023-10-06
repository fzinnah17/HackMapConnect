import React, { useState, useEffect } from 'react';
import { getAllLocations } from '../services/LocationsAPI';
import { Link } from 'react-router-dom';
import '../css/Locations.css';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [venueNames, setVenueNames] = useState({
        venue1: '',
        venue2: '',
        venue3: '',
        venue4: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await getAllLocations();
                setLocations(locationsData);

                // Check for array length before accessing its values
                const v1 = locationsData[0] ? locationsData[0].name : '';
                const v2 = locationsData[1] ? locationsData[1].name : '';
                const v3 = locationsData[2] ? locationsData[2].name : '';
                const v4 = locationsData[3] ? locationsData[3].name : '';

                setVenueNames({ venue1: v1, venue2: v2, venue3: v3, venue4: v4 });
                setListeners();
            } catch (error) {
                setError("Failed to load locations. Please try again later.");
            }
        })();
    }, []);

    const setListeners = () => {
        const polygons = document.querySelectorAll('polygon');
        polygons.forEach(element => {
            element.addEventListener('mouseover', event => {
                const buttonElement = document.getElementById(`${event.target.id}button`);
                buttonElement.style.opacity = 1;
            });
            element.addEventListener('mouseleave', event => {
                const buttonElement = document.getElementById(`${event.target.id}button`);
                buttonElement.style.opacity = 0;
            });
        });
    };

    return (
        <div>
        <h2>Locations</h2>
        <ul>
            {locations.map(location => (
                <li key={location.id}>
                    <Link to={`/location/${location.id}`}>{location.name}</Link>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default Locations;
