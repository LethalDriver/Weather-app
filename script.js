const icons = {
  "01d" : "☀️",
  "02d" : "⛅ ",
  "03d" : "☁️",
  "04d" : "☁️☁️",
  "09d" : "🌧️",
  "10d" : "🌦️ ",
  "11d" : "⛈️",
  "13d" : "🌨️",
  "50d" : "🌫️",
  "01n" : "🌑",
  "02n" : "🌑☁️",
  "03n" : "☁️",
  "04n" : "☁️☁️",
  "09n" : "🌧️",
  "10n" : "🌦️ ",
  "11n" : "⛈️",
  "13n" : "🌨️",
  "50n" : "🌫️",
};





getWeather("Wroclaw");

function getWeather(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=056a8e262a0cdfb05d033d53714f2f00&units=metric`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    
    try {
      showCityName(myJson.name);
      showTemp(myJson.main.temp);
      showIcon(myJson.weather[0].icon);
      
    } catch (error) {
      showCityName('---');
      showTemp('-');
      showIcon('-');
    }
  });
}



function showCityName(city){
  document.querySelector("#cityName").textContent = city;
}

function showIcon(value){
  console.log(value);
  document.querySelector("#icon").textContent = icons[value];
}

function showTemp(value){
  document.querySelector("#temp").textContent = `${value}°C`;
}

function getCity(event){
  event.preventDefault();
  getWeather(this.form.address.value);
  this.form.address.value = "";
}

document.querySelector("#getBtn").addEventListener("click", getCity);
