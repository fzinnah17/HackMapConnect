import React, { useState, useEffect } from 'react';
import { getAllLocations } from '../services/LocationsAPI';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllLocations();
                const sortedData = data.sort((a, b) => a.id - b.id);
                setLocations(sortedData);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <div>
            <h2>Select a Location</h2>
            <ul>
                {locations.map(location => (
                    <li key={location.id}>
                        <a href={`/locations/${location.id}`}>{location.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Locations;
