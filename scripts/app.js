import { data, forecastData, fetchCurrentData, fetch5DayForecast, longitude, latitude, currentTime} from "./fetches.js";

// fetchCurrentData();

let selectedCity = document.getElementById('selectedCity'),
    currentWeatherIcon = document.getElementById('currentWeatherIcon'),
    currentTempTxt = document.getElementById('currentTempTxt'),
    allHorizontalDots = document.getElementsByClassName('dayHr'),
    allDayModeFontColor = document.getElementsByClassName('allDayModeFontColor'),
    allWhiteBg = document.getElementsByClassName('whiteBg'),
    weatherDescTxt = document.getElementById('weatherDescTxt'),
    currentHighTempTxt = document.getElementById('currentHighTempTxt'),
    currentLowTempTxt = document.getElementById('currentLowTempTxt'),
    currentHourTxt = document.getElementById('currentHourTxt'),
    currentMinuteTxt = document.getElementById('currentMinuteTxt'),
    AMPMTxt = document.getElementById('AMPMTxt'),
    morningTempTxt = document.getElementById('morningTempTxt'),
    allVerticalDots = document.getElementsByClassName('vertical_dotted_line'),
    dayTempTxt = document.getElementById('dayTempTxt'),
    nightTempTxt = document.getElementById('nightTempTxt'),
    allForecastBoxes = document.getElementsByClassName('allForecastBoxes'),
    allForecastWeatherIcons = document.getElementsByClassName('fiveDayIcon'),
    moreInfoBox = document.getElementById('moreInfoBox'),
    whicheverDayClickedTxt = document.getElementById('whicheverDayClickedTxt'),
    weatherDescForWhicheverDayClicked = document.getElementById('weatherDescForWhicheverDayClicked'),
    morningWeatherIconForWhicheverDayClicked = document.getElementById('morningWeatherIconForWhicheverDayClicked'),
    morningTempTxtForWhicheverDayClicked = document.getElementById('morningTempTxtForWhicheverDayClicked'),
    noonTempTxtForWhicheverDayClicked = document.getElementById('noonTempTxtForWhicheverDayClicked'),
    noonWeatherIconForWhicheverDayClicked = document.getElementById('noonWeatherIconForWhicheverDayClicked'),
    nightWeatherIconForWhicheverDayClicked = document.getElementById('nightWeatherIconForWhicheverDayClicked'),
    nightTempTxtForWhicheverDayClicked = document.getElementById('nightTempTxtForWhicheverDayClicked'),
    errorOverlay = document.getElementById('errorOverlay'),
    errorBox = document.getElementById('errorBox'),
    searchAgainBtn = document.getElementById('searchAgainBtn');



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