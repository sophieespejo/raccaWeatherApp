//navigator

import {fetchCurrentWeatherFromGeolocation} from "./fetches.js";
import {prod, dev} from "./environment.js";

let currentLat, currentLon;

function success(position)
{
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    currentLat = position.coords.latitude;
    currentLon = position.coords.longitude;
    console.log(prod);
    console.log(prod.apiKey);
    fetchCurrentWeatherFromGeolocation(currentLat, currentLon, prod.apiKey);
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