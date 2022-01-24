 import {dOrNSearch} from "./darkMode.js";
 import {getForecastTxt, getCurrentTxt, getCurrentTxtFromGeolocation, errorMsg, errorOverlay} from "./displayData.js";
 import {currentLat, currentLon} from "./geolocation.js";
 
 let data, forecastData, cityNameData;


export function fetchCurrentData(location)
{
     fetch("http://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=imperial&appid=7501411bffa05223726106f51f48642c").then(
        response => response.json()
    ).then(
        data => {
            getCurrentTxt(data);
            console.log(data);
            return data;
        }
    ).catch( error => errorMsg())
}
// export function fetchCurrentData(location)
// {
//      fetch("http://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=imperial&appid=7501411bffa05223726106f51f48642c").then(
//          response => response.json()
// }


export function fetch5DayForecastFromCityName(latitude, longitude)
{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=7501411bffa05223726106f51f48642c`).then(
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

export function fetchCurrentWeatherFromGeolocation(latitude, longitude)
{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=7501411bffa05223726106f51f48642c`).then(
        response => response.json()
    ).then(
        data => {
            forecastData = data;
            setTimeout(getForecastTxt(forecastData), 200);
            setTimeout(getCurrentTxtFromGeolocation(forecastData), 300);
            setTimeout(getCityNameFromGeolocation(currentLat, currentLon), 300);
            return forecastData;
        }
    )
}

function getCityNameFromGeolocation(latitude, longitude)
{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=7501411bffa05223726106f51f48642c`).then(
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


