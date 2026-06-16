const API_KEY = "3740baf2d5a1c258f8210b096dd29029";

const cityInput =
document.getElementById("cityInput");

const searchBtn =
document.getElementById("search");

const weatherCard =
document.getElementById("WeatherCard");

const historyDiv =
document.getElementById("History");

const loading =
document.getElementById("Loading");

loadHistory();

searchBtn.addEventListener(
    "click",
    () => {

        const city =
        cityInput.value.trim();

        if(city){

            getWeather(city);

        }

    }
);

async function getWeather(city){

    try{

        loading.textContent =
        "Loading...";

        const response =
        await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if(!response.ok){

            throw new Error(
            "City not found"
            );

        }

        const data =
        await response.json();

        displayWeather(data);

        saveCity(city);

        loading.textContent = "";

    }

    catch(error){

        loading.textContent = "";

        weatherCard.innerHTML =

        `<h3>${error.message}</h3>`;

    }

}

function displayWeather(data){

    weatherCard.innerHTML =

    `
    <div class="city">
        ${data.name}
    </div>

    <div class="temp">
        ${Math.round(data.main.temp)}°C
    </div>

    <p>
        ${data.weather[0].description}
    </p>

    <p>
        Humidity:
        ${data.main.humidity}%
    </p>

    <p>
        Wind:
        ${data.wind.speed} m/s
    </p>
    `;

}

function saveCity(city){

    let cities =

    JSON.parse(
    localStorage.getItem("cities")
    ) || [];

    if(!cities.includes(city)){

        cities.push(city);

        localStorage.setItem(
            "cities",
            JSON.stringify(cities)
        );

    }

    loadHistory();

}

function loadHistory(){

    let cities =

    JSON.parse(
    localStorage.getItem("cities")
    ) || [];

    historyDiv.innerHTML =

    "<h3>Recent Searches</h3>";

    cities.forEach(city => {

        const item =
        document.createElement("div");

        item.className =
        "history-item";

        item.textContent =
        city;

        item.addEventListener(
            "click",
            () => getWeather(city)
        );

        historyDiv.appendChild(item);

    });

}