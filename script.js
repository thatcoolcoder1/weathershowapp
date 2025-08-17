


const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "YOUR-API-KEY";

const lcinput = document.getElementById("lc");
const srbut = document.getElementById("sr");
const weather = document.getElementById("weathr");
const temperature = document.getElementById("temp");
const description = document.getElementById("desc");






srbut.addEventListener('click', () => {
    const location=lcinput.value;
    if (location){
        fetchWeather(location)
    }
});



function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())

        .then(data => {
            console.log(data)
            weather.textContent = data.name;
            temperature.textContent = `${Math.round(data.main.temp)}°C`;
            description.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


