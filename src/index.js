//code to display current date and time
function currentDate() {
  let now = new Date();

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
  let minutesFormatted = (minutes < 10 ? "0" : "") + minutes;
  let today = document.querySelector("#date");

  today.innerHTML = `${day}, ${hour}:${minutesFormatted}`;
}
currentDate();

//code for displaying country being searched and current temp of that country
let searchCity = document.querySelector("#search-form");
let country = document.querySelector("#country");
function weather(response) {
  let temperature = document.querySelector("#current-temp");
  let theTemp = Math.round(response.data.main.temp);
  temperature.innerHTML = `🌞${theTemp}`;
}
function displayCountry(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search");
  country.innerHTML = search.value;

  let city = search.value;
  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(weather);
}

searchCity.addEventListener("submit", displayCountry);

//code temperature conversion between celcius and fahrenheit

let Fahrenheit = document.querySelector("#degrees-fahrenheit");
let currentTemp = document.querySelector("#current-temp");
function tempF(event) {
  event.preventDefault();
  currentTemp.innerHTML = "<strong>🌞52</strong>";
}
Fahrenheit.addEventListener("click", tempF);

let celcius = document.querySelector("#degrees-celcius");
function tempC(event) {
  event.preventDefault();
  currentTemp.innerHTML = "<strong>🌞11</strong>";
}
celcius.addEventListener("click", tempC);

//code for the button using geolocation API
let currentLocation = document.querySelector("#current-location");

function geoTemp(response) {
  let temperature = document.querySelector("#current-temp");
  let theTemp = Math.round(response.data.main.temp);
  temperature.innerHTML = `🌞${theTemp}`;
  let myLocation = document.querySelector("#country");
  myLocation.innerHTML = response.data.name;
}
function getLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(geoTemp);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}

currentLocation.addEventListener("click", getCurrentPosition);
