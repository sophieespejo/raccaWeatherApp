let data, forecastData, longitude, latitude, currentTemp, weatherDesc, currentMin, currentMax, cityName, currentTime, day1MaxTemp, day1MinTemp, day1OverallTemp, day2MaxTemp, day2MinTemp, day2OverallTemp, day3MaxTemp, day3MinTemp, day3OverallTemp, day4MaxTemp, day4MinTemp, day4OverallTemp, day5MaxTemp, day5MinTemp, day5OverallTemp, fetchedData, eightAMtxt, noonTxt, eightPMtxt;

export function fetchCurrentData(location)
{
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=imperial&appid=7501411bffa05223726106f51f48642c").then(
        response => response.json()
    ).then(
        data => {
            // console.log(data);
            getCurrentTxt(data);
        }
    )
}
// fetchCurrentData('stockton');

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
    //what do i need from current weather API?
    currentTemp = data.main.temp;
    // console.log(Math.round(currentTemp));
    weatherDesc = data.weather[0].description;
    // console.log(weatherDesc);
    currentMin = data.main.temp_min;
    // console.log(Math.round(currentMin));
    currentMax = data.main.temp_max;
    // console.log(currentMax);
    cityName = data.name;
    // console.log(cityName);
    currentTime = data.dt;
    let time = new Date(currentTime * 1000);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    // console.log(hours);
    // console.log(minutes);
    latitude = data.coord.lat;
    longitude = data.coord.lon;
    fetch5DayForecast(latitude, longitude);
}

export function getForecastTxt(forecastData){
    day1OverallTemp = forecastData.daily[1].temp.day;
    day1MinTemp = forecastData.daily[1].temp.min;
    day1MinTemp = forecastData.daily[1].temp.max;
    day2OverallTemp = forecastData.daily[2].temp.day;
    day2MinTemp = forecastData.daily[2].temp.min;
    day2MinTemp = forecastData.daily[2].temp.max;
    day3OverallTemp = forecastData.daily[3].temp.day;
    day3MinTemp = forecastData.daily[3].temp.min;
    day3MinTemp = forecastData.daily[3].temp.max;
    day4OverallTemp = forecastData.daily[4].temp.day;
    day4MinTemp = forecastData.daily[4].temp.min;
    day4MinTemp = forecastData.daily[4].temp.max;
    day5OverallTemp = forecastData.daily[5].temp.day;
    day5MinTemp = forecastData.daily[5].temp.min;
    day5MinTemp = forecastData.daily[5].temp.max;
    eightAMtxt = forecastData.daily[0].temp.morn;
    noonTxt = forecastData.daily[0].temp.day;
    eightPMtxt = forecastData.daily[0].temp.night;
}
