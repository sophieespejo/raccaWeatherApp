//navigator

function success(position)
{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

function error(err)
{
    console.warn(err.message);
}

options = {
    enableHighAccuracy:true,
    timeout: 5000,
    maximumAge: 0

};

navigator.geolocation.getCurrentPosition(success, error, options);