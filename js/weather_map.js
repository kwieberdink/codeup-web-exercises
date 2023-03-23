

const SALong = -98.48527;
const SALat = 29.423017;


(function(){
    "use strict";
    // Fetches San Antonio's Current Weather, and displays data in the console.
    const getWeather = async(weather) =>{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`)
        let data = await response.json();
        return data;
    }
    console.log(getWeather())
    // Create a function to display weather information
    const renderWeatherData = () => {

    }

})();



