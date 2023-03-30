let SALong = -98.1241;
let SALat = 29.7026;


let $weatherHTML = $(`#weather`)
let $currentHTML = $(`#currentCast`)
let $currentCity = $(`#currentCity`)
let currentForecast;
let fiveDayForecast = [];


(function(){

    // MAPBOX MAP RENDER
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [-98.1241, 29.7026],
        zoom: 10,
    });

    const getWeather = async(weather) =>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        let data = await response.json();
        return data;
    }

    const fiveDayForecast = async(fiveDay) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.list.forEach((forecast,index)=>{
                    if (index % 8 === 0 && index !== 0) {
                    fiveDayForecast.push(forecast)
                    }
                });
            });
    };

    // Marker Search
    document.querySelector("#setMarkerButton").addEventListener(`click`, event => {
        event.preventDefault();
        const address = document.querySelector("#setMarker").value;
        geocode(address, MAPBOX_API_TOKEN).then(coords=>{
        })
    })
// const getWeather = (lat, lng) => {
//
// }
    const marker = new mapboxgl.Marker({

    })
    document.querySelector("#setMarkerButton").addEventListener('click', event => {
        event.preventDefault();
        const address = document.querySelector("#setMarker").value;
        geocode(address, MAPBOX_API_TOKEN).then(coords=>{
            marker.setLngLat(coords).addTo(map);
            map.flyTo({
                center: coords,
                essential: true
            })
            console.log(coords)
        });
    });
})();
























// Create a function that not only pulls information from weather, but also displays.
