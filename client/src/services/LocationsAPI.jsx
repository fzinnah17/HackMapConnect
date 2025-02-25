const LOCATIONS_BASE_URL = '/api/locations';

export const getAllLocations = async () => {
    const response = await fetch(LOCATIONS_BASE_URL);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch locations');
    }
}
