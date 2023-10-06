const EVENTS_BASE_URL = '/api/events';

export const getAllEvents = async () => {
    const response = await fetch(EVENTS_BASE_URL);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch events');
    }
}

export const getEventByLocation = async (locationId) => {
    const response = await fetch(`${EVENTS_BASE_URL}/location/${locationId}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch event by location');
    }
}
