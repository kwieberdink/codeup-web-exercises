

const SALong = -98.48527;
const SALat = 29.423017;
const fiveCast = [];
const locationCoords = [];


(function(){

    // Gets the map API and formats it into the html
    // Puts it in a container, with a style, starting point, and starting zoom
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: [-97.77925, 30.24514], // starting position [lng, lat]
        zoom: 10, // starting zoom
    });

    "use strict";
    // Fetches San Antonio's Current Weather, and displays data in the console.
    const getWeather = async(weather) =>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        let data = await response.json();
        return data;
    }
    console.log(getWeather())
    // Create a function to display weather information
    const renderWeatherData = (weather) => {
        let todayData = '';
        weather(item => {
            todayData += `<h2 id=""></h2>`
            todayData += `<p id="description"></p>`
            todayData += `<p id="temp"></p>`
            todayData += `<p id="wind"></p>`
        })
    }

    const fiveDayForecast = async(fiveDay) => {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.list.forEach((forecast,index)=>{
                    if (index % 8 === 0 && index !== 0) {
                        const time = new Date(forecast.dt * 1000);
                        console.log(time.getHours());
                        console.log(time.getTime());
                        console.log(time.getDay());
                        console.log(forecast.dt_txt);
                        console.log(forecast.weather[0].description);
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
            locationCoords.push(coords);r
        })
    })

    // When clicking the test toggle button, make the class `slide-screen` to hidden
    document.querySelector(`.test-toggle button`).addEventListener(`click`, event=>{
        document.querySelector(`.slide-screen`).classList.toggle("hide")
    })
    // When focusing in the search bar, do this.
    // document.querySelector(`#setMarker`).addEventListener(`focus`, event=>{
    //     // targets the class 'slide-screen' and toggles the slide screen to hidden
    //     document.querySelector(`.slide-screen`).classList.toggle("hide")
    // })

    // When inputting an address and clicking the button, will move the marker to the desired address input
    // calling marker globally
    const marker = new mapboxgl.Marker()
    // query Selecting the ID and adding a click event listener
    document.querySelector("#setMarkerButton").addEventListener('click', event => {
        // Preventing the submit button from reloading the page
        event.preventDefault();
        // document.querySelector(`.slide-screen`).classList.toggle("hide")
        const address = document.querySelector("#setMarker").value;
        geocode(address, MAPBOX_API_TOKEN).then(coords=>{
            // calls for coordinates of the address and console logs
            console.log(coords)
            // Setting market to coords and adding a pin to the map
            marker.setLngLat(coords).addTo(map);
            // Centering the map onto the desired coordinates
            map.flyTo({
                center: coords,
                essential: true
            })
        });
    });
})();




