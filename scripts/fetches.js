 import {dOrNSearch} from "./darkMode.js";
 
 let forecastData, longitude, latitude, currentTime;
 let allForecastWeatherDesc = [];
 let dates = [];
 let allForecastMornTemps = [];
 let allForecastNoonTemps = [];
 let allForecastNightTemps = [];
 let dayOrNight;
 let allForecastWeatherIcons = document.getElementsByClassName('fiveDayIcon');


export function fetchCurrentData(location)
{
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=imperial&appid=7501411bffa05223726106f51f48642c").then(
        response => response.json()
    ).then(
        data => {
            getCurrentTxt(data);
            console.log(data);
        }
    )
}


export function fetch5DayForecast(latitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely&appid=7501411bffa05223726106f51f48642c`).then(
        response => response.json()
    ).then(
        data => {
            forecastData = data;
            console.log(forecastData);
            getForecastTxt(forecastData);
        }
    )
}

export function getCurrentTxt(data){
    currentTempTxt.textContent = Math.round(data.main.temp);
    weatherDescTxt.textContent = data.weather[0].description;
    currentLowTempTxt.textContent = Math.round(data.main.temp_min);
    currentHighTempTxt.textContent = Math.round(data.main.temp_max);
    selectedCity.textContent = data.name;
    currentTime = data.dt;
    let time = new Date(currentTime * 1000);
    let hours = ((time.getHours() + 11) % 12 + 1);
    currentHourTxt.textContent = hours;
    currentMinuteTxt.textContent = time.getMinutes();
    dayOrNight = data.weather[0].icon;
    currentWeatherIcon.src = `/images/icons/svg/${dayOrNight}.svg`;
    // currentWeatherIcon.src = "/images/icons/50d.png";
    // currentWeatherIcon.classList.add("yellow");
    console.log(data.weather[0].icon);
    var suffix = hours >= 12 ? "PM":"AM"; 
    AMPMTxt.textContent = suffix;
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    fetch5DayForecast(latitude, longitude);
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


export {allForecastWeatherDesc, dates, allForecastMornTemps, allForecastNoonTemps, allForecastNightTemps, dayOrNight, allForecastWeatherIcons};


