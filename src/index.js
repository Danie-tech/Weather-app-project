let now = new Date();
let currentDate = document.querySelector("#current-date");

let date = now.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentDate.innerHTML = `${day}, ${hour}:${minutes}`;

function currentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${temperature}º C`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `Wind speed: ${wind}km/hr`;
  console.log(response.data);
}

function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-city");
  let showCity = document.querySelector("#current-city");
  showCity.innerHTML = `${currentCity.value}`;
  let city = currentCity.value;

  let apiKey = "0bd923d5cac86a139a92eda79ce74580";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(currentWeather);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
