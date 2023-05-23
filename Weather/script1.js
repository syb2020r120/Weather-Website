const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0f564a1921mshc64261e5fe37dc1p12a5ebjsnbb5776da3ad8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerText = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            humidity.innerHTML = response.humidity
            temp.innerHTML = response.temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            cloud_pct.innerHTML=response.cloud_pct
            feels_like.innerHTML=response.feels_like
            wind_degrees.innerHTML=response.wind_degrees 
            wind_speed.innerHTML=response.wind_speed
        })
        .catch(err => console.error(err));
}

const getDelhi = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Dmin_temp.innerHTML=response.min_temp
            Dmax_temp.innerHTML=response.max_temp
            Dhumidity.innerHTML=response.humidity
        })
        .catch(err => console.error(err));
}

const getMumbai= (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Mmin_temp.innerHTML=response.min_temp
            Mmax_temp.innerHTML=response.max_temp
            Mhumidity.innerHTML=response.humidity
        })
        .catch(err => console.error(err));
}

const getPune = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Pmin_temp.innerHTML=response.min_temp
            Pmax_temp.innerHTML=response.max_temp
            Phumidity.innerHTML=response.humidity
        })
        .catch(err => console.error(err));
}

const getRajastan = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Rmin_temp.innerHTML=response.min_temp
            Rmax_temp.innerHTML=response.max_temp
            Rhumidity.innerHTML=response.humidity
        })
        .catch(err => console.error(err));
}

const getHyderabad = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Hmin_temp.innerHTML=response.min_temp
            Hmax_temp.innerHTML=response.max_temp
            Hhumidity.innerHTML=response.humidity
        })
        .catch(err => console.error(err));
}

const getBanglore= (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            Bmin_temp.innerHTML=response.min_temp
            Bmax_temp.innerHTML=response.max_temp
            Bhumidity.innerHTML=response.humidity
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")
getDelhi("Delhi")
getMumbai("Mumbai")
getPune("Pune")
getRajastan("Rajastan")
getHyderabad("Hyderabad")
getBanglore("Banglore")