
 import {getForecastTxt, getCurrentTxt, getCurrentTxtFromGeolocation, errorMsg} from "./displayData.js";
 import {currentLat, currentLon} from "./geolocation.js";
 import {prod, dev} from "./environment.js"
 
 let data, forecastData, cityNameData;


export function fetchCurrentData(location, apiKey)
{
    
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`).then(
        response => response.json()
    ).then(
        data => {
            getCurrentTxt(data);
            console.log(data);
            return data;
        }
    ).catch( error => errorMsg()) 
}

export function fetch5DayForecastFromCityName(latitude, longitude, apiKey)
{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=${apiKey}`).then(
        response => response.json()
    ).then(
        data => {
            forecastData = data;
            console.log(forecastData);
            getForecastTxt(forecastData);
            return forecastData;
        }
    )
}

export function fetchCurrentWeatherFromGeolocation(latitude, longitude, apiKey)
{
    console.log("api" + apiKey);
    setTimeout(console.log("hi"), 3000)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=${apiKey}`).then(
        response => response.json()
    ).then(
        data => {
            forecastData = data;
            setTimeout(getForecastTxt(forecastData), 1000);
            setTimeout(getCurrentTxtFromGeolocation(forecastData), 2000);
            setTimeout(getCityNameFromGeolocation(currentLat, currentLon, apiKey), 3000);
            return forecastData;
        }
    )
}

function getCityNameFromGeolocation(latitude, longitude, apiKey)
{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=${apiKey}`).then(
        response => response.json()
    ).then(
        data => {
            cityNameData = data;
            console.log(cityNameData);
            selectedCity.textContent = cityNameData.city.name;
        }
    )
}



export {data, forecastData, cityNameData};


