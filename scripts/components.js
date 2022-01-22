//make function that will create the favorite city list

let allFavorites = document.getElementsByClassName('faveRow');

function addFavoriteCityToList(cityName)
{
    //create row
    let mainRow = document.createElement("div");
    mainRow.className = "row justify-content-center faveRow";
    mainRow.id = cityName;
    //create col within row
    let mainCol = document.createElement("div");
    mainCol.className = "col-12 favoriteCityBox";
    //create row that's in col
    let rowBg = document.createElement("div");
    rowBg.className = "row justify-content-between faveBg";
    //create col-10 inside that
    let col10 = document.createElement("div");
    col10.className = "col-10";
    //create button inside col10
    let nameBtn = document.createElement("button");
    nameBtn.className = "btn nameSide";
    nameBtn.type = "button";
    nameBtn.textContent = cityName;
    //append nameBtn to col10
    col10.appendChild(nameBtn);
    //create col-2
    let col2 = document.createElement("div");
    col2.className = "col-2";
    //create button inside col2
    let removeBtn = document.createElement("button");
    removeBtn.className = "btn removeBtn";
    removeBtn.type = "button";
    removeBtn.value = cityName;
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
}

function removeFavoritesCityFromList()
{
    // if(allFavorites.includes(cityName))
    // {
    //     let cityIndex = allFavorites.indexOf(cityName);
    //     allFavorites[cityIndex].innerHTML = "";
    // }
    // else{
    //     console.log("error");
    // }
    console.log("I'm supposed to be removed...")
}


export {removeFavoritesCityFromList, addFavoriteCityToList}