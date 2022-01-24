import { fetchCurrentData} from "./fetches.js";
import {saveToLocalStorageByCityName, GetLocalStorage} from "./localStorage.js";
import {addFavoriteCityToList} from "./components.js";
import {success, error, options, currentLat, currentLon} from "./geolocation.js";
import {errorOverlay, getWeatherDescBasedOnDay} from "./displayData.js";
import {prod} from "./environment.js";


let selectedCity = document.getElementById('selectedCity'),
    faveBtn = document.getElementById('faveBtn'),
    forecastBtns = document.getElementsByClassName('forecastBtn'),
    heartIcon = document.getElementById('heartIcon'),
    searchAgainBtn = document.getElementById('searchAgainBtn'),
    openBtn = document.getElementById('openBtn'),
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
      fetchCurrentData(citySearch.value, prod.apiKey);
  })

for(let i = 0; i<forecastBtns.length; i++)
{
  forecastBtns[i].addEventListener('click', function(e){
    getWeatherDescBasedOnDay(this.value);
  })
}

faveBtn.addEventListener('click', function(e){
  saveToLocalStorageByCityName(citySearch.value);
  // heartIcon.className = "fas fa-heart";
  addFavoriteCityToList(citySearch.value);
  citySearch.value = "";
})

searchAgainBtn.addEventListener('click', function()
{
    errorOverlay.classList.add("d-none");
})


GetLocalStorage();