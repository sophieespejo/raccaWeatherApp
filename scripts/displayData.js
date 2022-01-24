import {data, forecastData, fetch5DayForecastFromCityName, cityNameData} from "./fetches.js";
import {dOrNSearch} from "./darkMode.js";

let allForecastWeatherDesc = [];
let dates = [];
let allForecastMornTemps = [];
let allForecastNoonTemps = [];
let allForecastNightTemps = [];
let dayOrNight;
let latitude;
let longitude;
let allForecastWeatherIcons = document.getElementsByClassName('fiveDayIcon'),
    errorOverlay = document.getElementById('errorOverlay');

export function getCurrentTxt(data){
    currentTempTxt.textContent = Math.round(data.main.temp);
    weatherDescTxt.textContent = data.weather[0].description;
    currentLowTempTxt.textContent = Math.round(data.main.temp_min);
    currentHighTempTxt.textContent = Math.round(data.main.temp_max);
    selectedCity.textContent = data.name;
    let time = new Date(data.dt*1000);
    let utc_offset = time.getTimezoneOffset();
    time.setMinutes(time.getMinutes()+ utc_offset);
    let cityOffSet = data.timezone/60;
    time.setMinutes(time.getMinutes()+ cityOffSet);
    let hour = time.toLocaleTimeString ('en-US', {hour: '2-digit', hour12: true, minute: '2-digit'});
    currentHourTxt.textContent = hour;
    dayOrNight = data.weather[0].icon;
    currentWeatherIcon.src = `/images/icons/svg/${dayOrNight}.svg`;
    console.log(data.weather[0].icon);
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    fetch5DayForecastFromCityName(latitude, longitude);
    dOrNSearch(dayOrNight);
}

export function getForecastTxt(forecastData){
    let allForecastHighTempTxtArray = document.getElementsByClassName('allForecastHighTempTxt'),
    allForecaseLowTempTxtsArray = document.getElementsByClassName('allForecaseLowTempTxt'), allForecastDaysNamesArray = document.getElementsByClassName('forecastDaysArray'), allForecastMonthNumsArray = document.getElementsByClassName('forecastMonthNums'), allForecastDaysNumArray = document.getElementsByClassName('forecastDayNums');
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let months =[];
    let dayNums = [];
    let iconsArr = [];

    for(let i = 1; i<= 5; i++)
    {
        dates.push(new Date(forecastData.daily[i].dt * 1000).getDay());
        months.push(new Date(forecastData.daily[i].dt * 1000).getMonth());
        dayNums.push(new Date(forecastData.daily[i].dt * 1000).getDate());
        iconsArr.push(forecastData.daily[i].weather[0].icon);
        allForecastWeatherDesc.push(forecastData.daily[i].weather[0].description);
        allForecastMornTemps.push(forecastData.daily[i].temp.morn);
        allForecastNoonTemps.push(forecastData.daily[i].temp.day);
        allForecastNightTemps.push(forecastData.daily[i].temp.night);
    }

    for(let i = 0; i< allForecastHighTempTxtArray.length; i++)
    {
        allForecastHighTempTxtArray[i].textContent = Math.round(forecastData.daily[i+1].temp.day);
        allForecaseLowTempTxtsArray[i].textContent = Math.round(forecastData.daily[i+1].temp.min);
        allForecastDaysNamesArray[i].textContent = days[(dates[i])];
        allForecastMonthNumsArray[i].textContent = months[i]+1;
        allForecastDaysNumArray[i].textContent = dayNums[i];
        allForecastWeatherIcons[i].src = `/images/icons/png/${iconsArr[i]}.png`;
    }
    morningTempTxt.textContent = Math.round(forecastData.daily[0].temp.morn);
    dayTempTxt.textContent = Math.round(forecastData.daily[0].temp.day);
    nightTempTxt.textContent = Math.round(forecastData.daily[0].temp.night);


    return {allForecastWeatherDesc, dates, allForecastMornTemps, allForecastNoonTemps, allForecastNightTemps, allForecastWeatherIcons};
}

export function getCurrentTxtFromGeolocation()
{
    currentTempTxt.textContent = Math.round(forecastData.hourly[0].temp);
    weatherDescTxt.textContent = forecastData.hourly[0].weather[0].description;
    currentLowTempTxt.textContent = Math.round(forecastData.daily[0].temp.min);
    currentHighTempTxt.textContent = Math.round(forecastData.daily[0].temp.max);
    console.log(cityNameData);
    selectedCity.textContent = cityNameData.city.name;
    let time = new Date(forecastData.current.dt*1000);
    let utc_offset = time.getTimezoneOffset();
    time.setMinutes(time.getMinutes()+ utc_offset);
    let cityOffSet = forecastData.timezone_offset/60;
    time.setMinutes(time.getMinutes()+ cityOffSet);
    let hour = time.toLocaleTimeString ('en-US', {hour: '2-digit', hour12: true, minute: '2-digit'});
    currentHourTxt.textContent = hour;

}

export function errorMsg()
{
    errorOverlay.classList.remove("d-none");
}

export {allForecastWeatherDesc, dates, allForecastMornTemps, allForecastNoonTemps, allForecastNightTemps, allForecastWeatherIcons, errorOverlay};