// import {geocode, reverseGeocode} from './mapbox-geocode-utils-module.js'
//
// let SALong = -98.1241;
// let SALat = 29.7026;
//
// let coords;
//
// //Function loads and displays map onto the html page
// // Working Order
// window.addEventListener('DOMContentLoaded', () => {
//     const {map: newMap, marker: newMarker} = createMap([-98.1241, 29.7026], 10);
//     map = newMap;
//     marker = newMarker;
// });
//
//
//
// // Renders Map, Styles Map, and Calls Marker
// // Working order
// export function createMap(center, zoom) {
//     mapboxgl.accessToken = MAPBOX_API_TOKEN;
//     let map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/navigation-night-v1',
//         center: center,
//         zoom: zoom,
//     });
//     const marker = new mapboxgl.Marker()
//     return {map, marker};
// }
//
// let map, marker;
//
// // Obtains information from starting point
// export const currentWeatherData = async(lat, long) => {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(error);
//     }
// }
//
// // Request data from weather API for the original location and returns 3
// // different weather objects per day
// export const fourDayWeatherData = async(lat, long) => {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
//         const data = await response.json();
//         let fourDayData = data.list.filter((forecast, index) => index % 3 === 0);
//
//         setTimeout(async () => {
//             try {
//                 const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
//                 const data = await response.json();
//                 fourDayData = data.list.filter((forecast, index) => index % 3 === 0);
//                 updateWeatherInfo(null, fourDayData);
//             } catch(error) {
//                 console.log(error)
//             }
//         }, 8 * 60 * 60 * 1000);
//         return fourDayData;
//     } catch(error) {
//         console.log(error);
//     }
// }
//
// export function updateWeatherInfo(location) {
//     currentWeatherData(coords[1], coords[0]).then(data => {
//         console.log("Current weather data for " + location + ":", data);
//     });
//     fourDayWeatherData(coords[1], coords[0]).then(data => {
//         console.log("Four day weather data for " + location + ":", data);
//     });
// }
//
// // Marker search that moves the marker location to the desired location
// // inputted into the search bar
// document.querySelector("#setMarkerButton").addEventListener('click', async event => {
//     event.preventDefault();
//     const address = document.querySelector("#setMarker").value;
//     geocode(address, MAPBOX_API_TOKEN).then(async coords=>{
//         marker.setLngLat(coords).addTo(map);
//         map.flyTo({
//             center: coords,
//             essential: true
//         })
//         console.log(coords)
//         reverseGeocode(await coords, MAPBOX_API_TOKEN).then(location => {
//         updateWeatherInfo(location);
//
//         })
//     });
// });


import {geocode, reverseGeocode} from './mapbox-geocode-utils-module.js'

let coords = [-98.1241, 29.7026];

//Function loads and displays map onto the html page
window.addEventListener('DOMContentLoaded', async () => {
    const {map: newMap, marker: newMarker} = createMap(coords, 10);
    map = newMap;
    marker = newMarker;
    const location = await reverseGeocode(coords, MAPBOX_API_TOKEN);
    updateWeatherInfo(location);
});

// Renders Map, Styles Map, and Calls Marker
export function createMap(center, zoom) {
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: center,
        zoom: zoom,
    });
    const marker = new mapboxgl.Marker()
    return {map, marker};
}

let map, marker;

// Obtains information from starting point
export const currentWeatherData = async(lat, long) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

// Request data from weather API for the original location and returns 3
// different weather objects per day
export const fourDayWeatherData = async(lat, long) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        const data = await response.json();
        let fourDayData = data.list.filter((forecast, index) => index % 3 === 0);

        setTimeout(async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
                const data = await response.json();
                fourDayData = data.list.filter((forecast, index) => index % 3 === 0);
                updateWeatherInfo(fourDayData);
            } catch(error) {
                console.log(error)
            }
        }, 8 * 60 * 60 * 1000);
        return fourDayData;
    } catch(error) {
        console.log(error);
    }
}

export function updateWeatherInfo(location) {
    currentWeatherData(coords[1], coords[0]).then(data => {
        console.log("Current weather data for " + location + ":", data);
    });
    fourDayWeatherData(coords[1], coords[0]).then(data => {
        console.log("Four day weather data for " + location + ":", data);
    });
}

// Marker search that moves the marker location to the desired location
// inputted into the search bar
document.querySelector("#setMarkerButton").addEventListener('click', event => {
    event.preventDefault();
    const address = document.querySelector("#setMarker").value;
    geocode(address, MAPBOX_API_TOKEN).then(newCoords => {
        coords = newCoords;
        marker.setLngLat(coords).addTo(map);
        map.flyTo({
            center: coords,
            essential: true
        })
        reverseGeocode(coords, MAPBOX_API_TOKEN).then(location => {
            updateWeatherInfo(location);

        })
    })
})

