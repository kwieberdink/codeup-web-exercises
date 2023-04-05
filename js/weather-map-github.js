import {geocode, reverseGeocode} from './mapbox-geocode-utils-module.js'

let SALong = -98.1241;
let SALat = 29.7026;
let markerCoords;

let map, marker;

// Function loads and displays map onto the html page
// Working Order
window.addEventListener('DOMContentLoaded', () => {
    const {map: newMap, marker: newMarker} = createMap([-98.1241, 29.7026], 10);
    map = newMap;
    marker = newMarker;
});


document.querySelector("#setMarkerButton").addEventListener('click', async event => {
    event.preventDefault();
    const address = document.querySelector("#setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        marker.setLngLat(coords).addTo(map);
        map.flyTo({
            center: coords,
            essential: true,
            zoom: 10
        });
        console.log(coords)
    });
});


// Get Weather Data for the Current Day
// Working order
export const currentWeatherData = async(lat, long) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

// Get Weather Data for 4 Day Forecast 3 Times a Day
// Working order
export const fourDayWeatherData = async(lat, long) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        const data = await response.json();
        let fourDayData = data.list.filter((forecast, index) => index % 3 === 0);
        setTimeout(async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
                const data = await response.json();
                fourDayData = data.list.filter((forecast, index) => index % 3 === 0);
                updateWeatherInfo(fourDayData);
            } catch(error) {
                console.log(error)
                updateWeatherInfo([]);
            }
        }, 8 * 60 * 60 * 1000);
        return fourDayData;
    } catch(error) {
        console.log(error);
        return [];
    }
}
export function updateWeatherInfo(weatherData) {
    if (weatherData && weatherData.length > 0) {
        console.log(weatherData);
    } else {
        console.log("No weather data available");
    }
}

// Renders Map, Styles Map, and Calls Marker
// Working order
export function createMap(center, zoom) {
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: center,
        zoom: 6,
    });
    const marker = new mapboxgl.Marker()
    return {map, marker};
}

