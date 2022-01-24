//navigator

import {fetchCurrentWeatherFromGeolocation} from "./fetches.js";

let currentLat, currentLon;

function success(position)
{
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

export {success, error, options, currentLat, currentLon}