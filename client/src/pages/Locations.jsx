import React, { useState, useEffect } from 'react';
import { getAllLocations } from '../services/LocationsAPI';
import '../css/Locations.css';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllLocations();
                setLocations(data);
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="locations">
            <h2>Select a Location</h2>
            <div className="container">
                {locations.map((location, index) => {
                    const cardStyle = `card${(index % 3) + 1}`;
                    return (
                        <a key={location.id} className={cardStyle} href={`/location/${location.id}`}>
                            <h3>{location.name}</h3>
                            <p>Click to learn more.</p>
                            <div className="go-corner">
                                <div className="go-arrow">→</div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Locations;
