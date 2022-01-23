//checks to see if user is located in day or night
//searches current fecth data and checks if icon includes "d" or "n"
import {allForecastWeatherIcons } from "./displayData.js";


let wholePage = document.getElementById('wholePage'), 
    changeFontColor = document.getElementsByClassName('changeFontColor'),
    changeBlackToWhite = document.getElementsByClassName('changeBlackToWhite'),
    // allHorizontalDots = document.getElementsByClassName('horizontalDots'),
    allForecastBoxes = document.getElementsByClassName('forecastBox'),
    moreInfoBox = document.getElementById('moreInfoBox'),
    faveCityBox = document.getElementsByClassName('favoriteCityBox'),
    mySidenav = document.getElementById("mySidenav"),
    allRemoveBtns = document.getElementsByClassName("removeBtn"),
    allNameBtns = document.getElementsByClassName("nameSide"),
    dayTime = true;

function dOrNSearch (dayOrNight)
{
    if(dayOrNight.includes("d"))
    {
        dayTime = true;
        wholePage.className = "container-fluid";
        Array.from(allForecastWeatherIcons).forEach((icon) => {
            icon.className = "fiveDayIcon"
        });
        Array.from(changeBlackToWhite).forEach((containerToChange) => {
            containerToChange.classList.remove("darkModeBlackBg");
            containerToChange.classList.add("whiteBg");
        })
        Array.from(changeFontColor).forEach((fontColorToChange) => {
            fontColorToChange.classList.remove("darkModeFontColor");
            fontColorToChange.classList.add("dayModeFontColor");
        })
        faveBtn.addEventListener('click', function(e){
            heartIcon.className = "fas fa-heart";
        })
        Array.from(allNameBtns).forEach((nameBtn) => {
            nameBtn.className = "btn nameSide dayModeFontColor";
        })
        Array.from(allForecastBoxes).forEach((forecastBox) => {
            forecastBox.classList.remove("forecastBoxNightColor");
            forecastBox.classList.add("forecastBoxDayColor");
        })
        moreInfoBox.classList.remove("moreInfoBoxDarkMode");
        moreInfoBox.classList.add("moreInfoDayMode");
        openBtn.classList.remove("openFavesBtnDarkMode");
        openBtn.classList.add("openFavesBtnDayMode");
        Array.from(faveCityBox).forEach((favesBox) => {
            favesBox.className = "col-12 favoriteCityBox favoriteCityBoxDayMode"
        })
        mySidenav.className = "sidenav favesBox favesBoxDayMode";
    }
    else{
        dayTime = false;
        wholePage.className = "container-fluid dark-mode";
        Array.from(allForecastWeatherIcons).forEach((icon) => {
            icon.className = "fiveDayIcon whiteIcons"
        });
        Array.from(changeBlackToWhite).forEach((containerToChange) => {
            containerToChange.classList.remove("whiteBg");
            containerToChange.classList.add("darkModeBlackBg");
        })
        Array.from(changeFontColor).forEach((fontColorToChange) => {
            fontColorToChange.classList.remove("dayModeFontColor");
            fontColorToChange.classList.add("darkModeFontColor");
        })
        heartIcon.className = "fas fa-heart dark-mode";
        faveBtn.addEventListener('click', function(e){
            heartIcon.className = "fas fa-heart dark-mode";
        })
        Array.from(allNameBtns).forEach((nameBtn) => {
            nameBtn.className = "btn nameSide darkModeFontColor";
        })
        Array.from(allForecastBoxes).forEach((forecastBox) => {
            forecastBox.classList.remove("forecastBoxDayColor");
            forecastBox.classList.add("forecastBoxNightColor");
        })
        moreInfoBox.classList.remove("moreInfoDayMode");
        moreInfoBox.classList.add("moreInfoBoxDarkMode");
        moreInfoBox.classList.remove("openFavesBtnDayMode");
        openBtn.classList.add("openFavesBtnDarkMode");
        Array.from(faveCityBox).forEach((favesBox) => {
            favesBox.className = "col-12 favoriteCityBox favoritesCityBoxDarkMode"
        })
        mySidenav.className = "sidenav favesBox favesBoxDarkMode";
    }
    return dayTime;
}

export {dOrNSearch, dayTime}