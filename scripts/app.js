import { fetchCurrentData} from "./fetches.js";
import {saveToLocalStorageByCityName, GetLocalStorage, removeFromLocalStorage} from "./localStorage.js";
import {addFavoriteCityToList, removeFavoritesCityFromList} from "./components.js";
import {success, error, options, currentLat, currentLon} from "./geolocation.js";
import {allForecastWeatherDesc, dates, allForecastMornTemps, allForecastNoonTemps, allForecastNightTemps, allForecastWeatherIcons} from "./displayData.js"


let selectedCity = document.getElementById('selectedCity'),
    currentWeatherIcon = document.getElementById('currentWeatherIcon'),
    currentTempTxt = document.getElementById('currentTempTxt'),
    // allHorizontalDots = document.getElementsByClassName('dayHr'),
    // allDayModeFontColor = document.getElementsByClassName('allDayModeFontColor'),
    // allWhiteBg = document.getElementsByClassName('whiteBg'),
    weatherDescTxt = document.getElementById('weatherDescTxt'),
    currentHighTempTxt = document.getElementById('currentHighTempTxt'),
    favesContainer = document.getElementById('favesContainer'),
    currentLowTempTxt = document.getElementById('currentLowTempTxt'),
    currentHourTxt = document.getElementById('currentHourTxt'),
    morningTempTxt = document.getElementById('morningTempTxt'),
    // allVerticalDots = document.getElementsByClassName('vertical_dotted_line'),
    dayTempTxt = document.getElementById('dayTempTxt'),
    nightTempTxt = document.getElementById('nightTempTxt'),
    // allForecastBoxes = document.getElementsByClassName('allForecastBoxes'),
    // allForecastWeatherIcons = document.getElementsByClassName('fiveDayIcon'),
    moreInfoBox = document.getElementById('moreInfoBox'),
    whicheverDayClickedTxt = document.getElementById('whicheverDayClickedTxt'),
    faveBtn = document.getElementById('faveBtn'),
    weatherDescForWhicheverDayClicked = document.getElementById('weatherDescForWhicheverDayClicked'),
    morningWeatherIconForWhicheverDayClicked = document.getElementById('morningWeatherIconForWhicheverDayClicked'),
    morningTempTxtForWhicheverDayClicked = document.getElementById('morningTempTxtForWhicheverDayClicked'),
    noonTempTxtForWhicheverDayClicked = document.getElementById('noonTempTxtForWhicheverDayClicked'),
    noonWeatherIconForWhicheverDayClicked = document.getElementById('noonWeatherIconForWhicheverDayClicked'),
    nightWeatherIconForWhicheverDayClicked = document.getElementById('nightWeatherIconForWhicheverDayClicked'),
    nightTempTxtForWhicheverDayClicked = document.getElementById('nightTempTxtForWhicheverDayClicked'),
    errorOverlay = document.getElementById('errorOverlay'),
    errorBox = document.getElementById('errorBox'),
    searchAgainBtn = document.getElementById('searchAgainBtn'),
    forecastBtns = document.getElementsByClassName('forecastBtn'),
    dates1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    heartIcon = document.getElementById('heartIcon');




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

  searchBtn.addEventListener('click',  function(e){
      heartIcon.className = "far fa-heart";
      fetchCurrentData(citySearch.value);
  })

for(let i = 0; i<forecastBtns.length; i++)
{
  forecastBtns[i].addEventListener('click', function(e){
    getWeatherDescBasedOnDay(this.value);

  })
}



function getWeatherDescBasedOnDay(buttonValue)
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

faveBtn.addEventListener('click', function(e){
  saveToLocalStorageByCityName(citySearch.value);
  // heartIcon.className = "fas fa-heart";
  addFavoriteCityToList(citySearch.value);
  citySearch.value = "";
})