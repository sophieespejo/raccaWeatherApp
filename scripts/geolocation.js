//navigator

import {fetchCurrentWeatherFromGeolocation} from "./fetches.js";

let currentLat, currentLon;


function success(position)
{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    currentLat = position.coords.latitude;
    currentLon = position.coords.longitude;
    fetchCurrentWeatherFromGeolocation(currentLat, currentLon);

}

function error(err)
{
    console.warn(err.message);
}

let options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge: 0

};

navigator.geolocation.getCurrentPosition(success, error, options);

// function getAutoLocation(currentLat, currentLon)
// {
//     if(navigator.geolocation.getCurrentPosition(success, error, options))
//     {
//         fetch5DayForecast(currentLat, currentLon)
//     }
//     else{
//         console.log("error")
//     }
// }

export {success, error, options, currentLat, currentLon}