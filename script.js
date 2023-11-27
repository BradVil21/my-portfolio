let buttonSearch = document.querySelector(".seach-button");
let inputCity = document.querySelector(".input-city");

const API_KEY = "5769e082d2fd0061808b36ff5ddb438c"; /* Open weather map API key */

let getCityCoordinates = () => {
  let cityName = inputCity.value.trim(); // removes extra spaces and gets city name entered
  if(!cityName) return;
  let GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`

  fetch(GEOCODING_API_URL).then(res => res.jason()).then(data => {
    console.log(data)
  }).catch(() => {
    alert("An error occured while fetching the coordinates!")
  })

}

buttonSearch.addEventListener("click", getCityCoordinates)
