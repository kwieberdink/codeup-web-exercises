const SALong = -98.48527;
const SALat = 29.423017;

(function(){
    mapboxgl.accessToken = MAPBOX_API_TOKEN
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: [-98.48527, 29.423017], // starting position [lng, lat]
        zoom: 8, // starting zoom
    });
    "use strict"
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

    // When inputting an address and clicking the button, will move the marker to the desired address input
    // calling marker globally
    const marker = new mapboxgl.Marker({
        map: map,
        draggable: true,
        anchorPoint: new mapboxgl.Point(-98.48527,29.423017)
    })

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
                essential: true,
            })
        });
    });
}());