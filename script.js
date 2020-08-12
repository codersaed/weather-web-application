// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const weatherApi = {
    key: "0d354db3e63ccc87f83384480badbb62",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchBoxData = document.getElementById("search-box");
searchBoxData.addEventListener('keypress',(event) =>{
    if (event.keyCode === 13) {
        console.log(searchBoxData.value);
        getWeatherData(searchBoxData.value);
        document.querySelector('.weather-body').style.display = "block";
        document.getElementById("search-box").value = "" ;
    }
    
})

function getWeatherData(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(data => showWeatherReport(data))
}

function showWeatherReport(weather) {
    console.log(weather)
    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById("temperature");
    temp.innerText = `${Math.round(weather.main.temp)}`;

    let tempmin = document.getElementById("min-temp");
    tempmin.innerText = `${Math.floor(weather.main.temp_min)}`;

    let tempmax = document.getElementById("max-temp");
    tempmax.innerText = `${Math.ceil(weather.main.temp_max)}`;

    let weatherType = document.getElementById("weather");
    weatherType.innerText = `${weather.weather[0].main}`;

    let todayDate = document.getElementById("time");
    const currentDate = new Date();
    todayDate.innerText = dateManage(currentDate);


}

function dateManage(dateS) {
    const days = ['Sunday','Monday', 'Tuesday','Wednesday', 'Thursday','Friday','Saturday'];

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const year = dateS.getFullYear(); 
    const month = months[dateS.getMonth()];
    const date = dateS.getDate();
    const day = days[dateS.getDay()];
    console.log(day);

    return `${date} ${month}, (${day}) ${year}`;
}