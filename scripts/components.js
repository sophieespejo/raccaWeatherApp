//make function that will create the favorite city list

import { fetchCurrentData } from "./fetches.js";
import { removeFromLocalStorage, favoriteCities } from "./localStorage.js";
import {dayTime} from "./darkMode.js";
let favoriteCitiesArr = [];

function addFavoriteCityToList(cityName)
{
    //create row
    let mainRow = document.createElement("div");
    mainRow.className = "row justify-content-center faveRow";
    mainRow.id = cityName;
    //create col within row
    let mainCol = document.createElement("div");
    if(dayTime)
    {
        mainCol.className = "col-12 favoriteCityBox favoriteCityBoxDayMode";
    }
    else{
        mainCol.className = "col-12 favoriteCityBox favoritesCityBoxDarkMode";
    }
    //create row that's in col
    let rowBg = document.createElement("div");
    rowBg.className = "row justify-content-between faveBg";
    //create col-10 inside that
    let col10 = document.createElement("div");
    col10.className = "col-10";
    //create button inside col10
    let nameBtn = document.createElement("button");
    if(dayTime)
    {
        nameBtn.className = "btn nameSide dayModeFontColor";
    }
    else{
        nameBtn.className = "btn nameSide darkModeFontColor";
    }
    nameBtn.type = "button";
    nameBtn.textContent = cityName;
    nameBtn.value = cityName;
    nameBtn.addEventListener('click', function(e){
        fetchCurrentData(nameBtn.value)
    })
    //append nameBtn to col10
    col10.appendChild(nameBtn);
    //create col-2
    let col2 = document.createElement("div");
    col2.className = "col-2";
    //create button inside col2
    let removeBtn = document.createElement("button");
    if(dayTime)
    {
        removeBtn.className = "btn removeBtn dayModeFontColor";
    }
    else{
        removeBtn.className = "btn removeBtn darkModeFontColor";
    }
    removeBtn.className = "btn removeBtn changeFontColor";
    removeBtn.type = "button";
    removeBtn.value = cityName;
    removeBtn.addEventListener('click', function(e)
    {
        removeFromLocalStorage(removeBtn.value);
        // debugger
        this.parentNode.parentNode.parentNode.remove();
    })
    // removeBtn.onclick = "return this.parentNode.remove();"
    //create icon inside btn
    let timesIcon = document.createElement("i");
    timesIcon.className = "fas fa-times";
    //append icon to remove btn
    removeBtn.appendChild(timesIcon);
    //append remove btn to col-2
    col2.appendChild(removeBtn);
    //append both cols to the rowbg
    rowBg.appendChild(col10);
    rowBg.appendChild(col2);
    //append rowbg to main col
    mainCol.appendChild(rowBg);
    //append maincol to mainrow
    mainRow.appendChild(mainCol);
    //inject to dom
    injectHere.append(mainRow);
    
    favoriteCitiesArr.push(cityName);
}

function removeFavoritesCityFromList(buttonValue)
{
    // check if the value of the removeBtn is in the array of favoriteCities
    if(favoriteCitiesArr.includes(buttonValue))
    {
        let cityIndex = favoriteCitiesArr.indexOf(buttonValue);
        console.log('removed' + cityIndex);
        injectHere.removeChild(injectHere.childNodes[cityIndex+3]);
    }
    else{
        console.log("error")
    }

    // console.log(buttonValue);
}

function displayFavoriteCitiesOnDom(favoriteCities)
{
    for(let i = 0; i<favoriteCities.length; i++)
    {
        addFavoriteCityToList(favoriteCities[i])
    }
}


export {removeFavoritesCityFromList, addFavoriteCityToList, displayFavoriteCitiesOnDom}