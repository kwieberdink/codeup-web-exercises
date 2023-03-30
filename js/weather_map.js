

const SALong = -98.48527;
const SALat = 29.423017;
const fiveCast = [];
const locationCoords = [];


(function(){
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [-97.77925, 30.24514],
        zoom: 10,
    });

    "use strict";
    // Fetches San Antonio's Current Weather, and displays data in the console.
    const getWeather = async(weather) =>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        let data = await response.json();
        return data;
    }
    console.log(getWeather())

    const fiveDayForecast = async(fiveDay) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.list.forEach((forecast,index)=>{
                    if (index % 8 === 0 && index !== 0) {
                        const time = new Date(forecast.dt * 1000);
                    }
                });
            });
    };
    console.log(fiveDayForecast())

    // Marker Search
    document.querySelector("#setMarkerButton").addEventListener(`click`, event => {
        event.preventDefault();
        const address = document.querySelector("#setMarker").value;
        geocode(address, MAPBOX_API_TOKEN).then(coords=>{
            console.log(coords)
            locationCoords.push(coords);
        })
    })

    const marker = new mapboxgl.Marker()
    marker.getLngLat().lat;
    marker.getLngLat().lng;


    document.querySelector("#setMarkerButton").addEventListener('click', event => {
        event.preventDefault();
        const address = document.querySelector("#setMarker").value;
        geocode(address, MAPBOX_API_TOKEN).then(coords=>{
            console.log(coords)
            marker.setLngLat(coords).addTo(map);
            map.flyTo({
                center: coords,
                essential: true
            })
        });
    });
})();




