const BASE_URL = '/api/events';

export const getAllEvents = async () => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch events');
    }
}

export const getEventByLocation = async (locationId) => {
    const response = await fetch(`${BASE_URL}/location/${locationId}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch event by location');
    }
}
