import { data, forecastData, fetchCurrentData, fetch5DayForecast, longitude, latitude, currentTemp, weatherDesc, currentMin, currentMax, cityName, currentTime, day1MaxTemp, day1MinTemp, day1OverallTemp, day2MaxTemp, day2MinTemp, day2OverallTemp, day3MaxTemp, day3MinTemp, day3OverallTemp, day4MaxTemp, day4MinTemp, day4OverallTemp, day5MaxTemp, day5MinTemp, day5OverallTemp, fetchedData } from "./fetches.js";
// fetchCurrentData();


// fetchCurrentData(location);

let openBtn = document.getElementById('openBtn'),
    closeBtn = document.getElementById('closeBtn'),
    citySearch = document.getElementById('citySearch'),
    searchBtn = document.getElementById('searchBtn');

  openBtn.addEventListener('click', function(e){
    document.getElementById("mySidenav").style.width = "350px";
  })

  closeBtn.addEventListener('click', function(e){
    document.getElementById("mySidenav").style.width = "0px";
  })

  searchBtn.addEventListener('click', function(e){
      fetchCurrentData(citySearch.value);
  })