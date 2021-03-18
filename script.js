const navHamburger = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBars = document.getElementsByTagName("span");
const key = "7fc25908d302657f051ed31e21a3935e";

function navToggle(){
    navHamburger.addEventListener("click", function() {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");  
    hamburgerBars[0].classList.toggle("changeFirstBar");
    hamburgerBars[1].classList.toggle("changeSecondBar");
    hamburgerBars[2].classList.toggle("changeThirdBar");
    })
}
navToggle();

const weather = {};
const kelvin = 273;
weather.temperature = {
    unit : "celsius"
}

// window.addEventListener("load", () => {
// let lon;
// let lat;

// if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//     lon = position.coords.longitude;
//     lat = position.coords.latitude;
//     const proxy = "https://cors-anywhere.herokuapp.com/";
//     const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
//     fetch(api)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         let fTemp = Math.floor(((data.main.temp) * 9/5) - 459.67);
//         let weatherMain = data.weather[0].main;
//         console.log(data.weather[0].main);
//         document.querySelector(".dataValue").innerHTML = fTemp;
//         document.querySelector(".weather-main").innerHTML = weatherMain;
//     })
//   })
//  }
// })



