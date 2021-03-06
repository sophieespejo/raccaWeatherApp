import {displayFavoriteCitiesOnDom} from "./components.js";

let favoriteCities = [];

function saveToLocalStorageByCityName(cityName)
{
    favoriteCities.push(cityName);
    localStorage.setItem('Favorites', JSON.stringify(favoriteCities));
}

function saveToLocalStorage()
{
    localStorage.setItem('Favorites', JSON.stringify(favoriteCities));
}

function GetLocalStorage()
{
    let localStorageData = localStorage.getItem('Favorites');
    if(localStorage.getItem('Favorites'))
    {
        favoriteCities = JSON.parse(localStorageData);
    }
    else{
        saveToLocalStorage();
    }
    displayFavoriteCitiesOnDom(favoriteCities);
    return favoriteCities;
}

function removeFromLocalStorage(cityName){
    //find index of city name in favorites array
    let cityIndex = favoriteCities.indexOf(cityName);
    console.log("city index:"+ cityIndex);
    //found city name in array favorites
    favoriteCities.splice(cityIndex, 1);
    //updates local storage
    saveToLocalStorage();
}



export {saveToLocalStorageByCityName, GetLocalStorage,  removeFromLocalStorage, favoriteCities}