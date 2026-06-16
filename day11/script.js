const API_KEY = "3740baf2d5a1c258f8210b096dd29029";



const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("search");
const weatherCard = document.getElementById("WeatherCard");
const historyDiv = document.getElementById("History");
const loading = document.getElementById("Loading");

loadHistory();

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }

});

async function getWeather(city) {

    try {

        loading.textContent = "Loading...";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        const forecastData = await forecastResponse.json();

        displayForecast(forecastData);

        saveCity(city);

        loading.textContent = "";

    }

    catch (error) {

        loading.textContent = "";

        weatherCard.innerHTML =
            `<h2>${error.message}</h2>`;

        document.getElementById("forecast").innerHTML = "";

    }

}

function displayWeather(data) {

    weatherCard.innerHTML = `
        <h2>${data.name}</h2>

        <h1>${Math.round(data.main.temp)}°C</h1>

        <p>${data.weather[0].description}</p>

        <p>Humidity: ${data.main.humidity}%</p>

        <p>Wind: ${data.wind.speed} m/s</p>
    `;

}

function displayForecast(data) {

    const forecastDiv =
        document.getElementById("forecast");

    forecastDiv.innerHTML = "";

    const dailyForecasts =
        data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

    dailyForecasts.slice(0, 5).forEach(day => {

        const date =
            new Date(day.dt_txt);

        const dayName =
            date.toLocaleDateString(
                "en-US",
                { weekday: "short" }
            );

        const card =
            document.createElement("div");

        card.className =
            "forecast-card";

        card.innerHTML = `
            <h4>${dayName}</h4>
            <p>${Math.round(day.main.temp)}°C</p>
        `;

        forecastDiv.appendChild(card);

    });

}

function saveCity(city) {

    let cities =
        JSON.parse(
            localStorage.getItem("cities")
        ) || [];

    if (!cities.includes(city)) {

        cities.push(city);

        localStorage.setItem(
            "cities",
            JSON.stringify(cities)
        );

    }

    loadHistory();

}

function loadHistory() {

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