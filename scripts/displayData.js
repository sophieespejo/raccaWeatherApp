import {data, forecastData, fetch5DayForecastFromCityName} from "./fetches.js";
import {dOrNSearch} from "./darkMode.js";
import {prod, dev} from "./environment.js";

let allForecastWeatherDesc = [];
let dates = [];
let allForecastMornTemps = [];
let allForecastNoonTemps = [];
let allForecastNightTemps = [];
let dayOrNight;
let latitude;
let longitude;
let allForecastWeatherIcons = document.getElementsByClassName('fiveDayIcon'),
    errorOverlay = document.getElementById('errorOverlay'),
    todayTxt = document.getElementById('todayTxt'),
    currentWeatherIcon = document.getElementById('currentWeatherIcon'),
    currentTempTxt = document.getElementById('currentTempTxt'),
    weatherDescTxt = document.getElementById('weatherDescTxt'),
    currentHighTempTxt = document.getElementById('currentHighTempTxt'),
    // favesContainer = document.getElementById('favesContainer'),
    currentLowTempTxt = document.getElementById('currentLowTempTxt'),
    currentHourTxt = document.getElementById('currentHourTxt'),
    morningTempTxt = document.getElementById('morningTempTxt'),
    dayTempTxt = document.getElementById('dayTempTxt'),
    nightTempTxt = document.getElementById('nightTempTxt'),
    weatherDescForWhicheverDayClicked = document.getElementById('weatherDescForWhicheverDayClicked'),
    morningWeatherIconForWhicheverDayClicked = document.getElementById('morningWeatherIconForWhicheverDayClicked'),
    morningTempTxtForWhicheverDayClicked = document.getElementById('morningTempTxtForWhicheverDayClicked'),
    noonTempTxtForWhicheverDayClicked = document.getElementById('noonTempTxtForWhicheverDayClicked'),
    noonWeatherIconForWhicheverDayClicked = document.getElementById('noonWeatherIconForWhicheverDayClicked'),
    nightWeatherIconForWhicheverDayClicked = document.getElementById('nightWeatherIconForWhicheverDayClicked'),
    nightTempTxtForWhicheverDayClicked = document.getElementById('nightTempTxtForWhicheverDayClicked'),
    whicheverDayClickedTxt = document.getElementById('whicheverDayClickedTxt'),
    dates1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // moreInfoBox = document.getElementById('moreInfoBox');

export function getCurrentTxt(data){
    currentTempTxt.textContent = Math.round(data.main.temp);
    weatherDescTxt.textContent = data.weather[0].description;
    currentLowTempTxt.textContent = Math.round(data.main.temp_min);
    currentHighTempTxt.textContent = Math.round(data.main.temp_max);
    selectedCity.textContent = data.name;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let time = new Date(data.dt*1000);
    todayTxt.textContent = days[time.getDay()];
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
    fetch5DayForecastFromCityName(latitude, longitude, prod.apiKey);
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
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let time = new Date(forecastData.current.dt*1000);
    todayTxt.textContent = days[time.getDay()];
    let utc_offset = time.getTimezoneOffset();
    time.setMinutes(time.getMinutes()+ utc_offset);
    let cityOffSet = forecastData.timezone_offset/60;
    time.setMinutes(time.getMinutes()+ cityOffSet);
    let hour = time.toLocaleTimeString ('en-US', {hour: '2-digit', hour12: true, minute: '2-digit'});
    currentHourTxt.textContent = hour;
    dayOrNight = forecastData.hourly[0].weather[0].icon;
    dOrNSearch(dayOrNight);

}

export function errorMsg()
{
    errorOverlay.classList.remove("d-none");
}

export function getWeatherDescBasedOnDay(buttonValue)
{
  moreInfoBox.classList.remove('d-none');
  switch(buttonValue)
  {
    case "0":
      weatherDescForWhicheverDayClicked.textContent = allForecastWeatherDesc[0];
      whicheverDayClickedTxt.textContent = dates1[(dates[0])];
      morningTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastMornTemps[0]);
      noonTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNoonTemps[0]);
      nightTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNightTemps[0]);
      break;
    case "1":
        weatherDescForWhicheverDayClicked.textContent = allForecastWeatherDesc[1];
        whicheverDayClickedTxt.textContent = dates1[(dates[1])];
        morningTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastMornTemps[1]);
        noonTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNoonTemps[1]);
        nightTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNightTemps[1]);
      break;
    case "2":
        weatherDescForWhicheverDayClicked.textContent = allForecastWeatherDesc[2];
        whicheverDayClickedTxt.textContent = dates1[(dates[2])];
        morningTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastMornTemps[2]);
        noonTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNoonTemps[2]);
        nightTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNightTemps[2]);
      break;
    case "3":
        weatherDescForWhicheverDayClicked.textContent = allForecastWeatherDesc[3];
        whicheverDayClickedTxt.textContent = dates1[(dates[3])];
        morningTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastMornTemps[3]);
        noonTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNoonTemps[3]);
        nightTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNightTemps[3]);
        break;
    case "4":
        weatherDescForWhicheverDayClicked.textContent = allForecastWeatherDesc[4];
        whicheverDayClickedTxt.textContent = dates1[(dates[4])];
        morningTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastMornTemps[4]);
        noonTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNoonTemps[4]);
        nightTempTxtForWhicheverDayClicked.textContent = Math.round(allForecastNightTemps[4]);
        break;
    default:
        break;
  }
}

export {allForecastWeatherDesc, dates, allForecastMornTemps, allForecastNoonTemps, allForecastNightTemps, allForecastWeatherIcons, errorOverlay};