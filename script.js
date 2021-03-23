const navHamburger = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBars = document.getElementsByTagName("span");
const key = "7fc25908d302657f051ed31e21a3935e";
const degSection = document.querySelector(".deg-section");
const temp = document.querySelector(".temp");
let tempSpan = document.querySelector(".temp span");
let tempDegree = document.querySelector(".temp-degree");
const tempIcon = document.querySelector(".temp-icon");
const localTimezone = document.querySelector(".location-timezone");
const tempDescription = document.querySelector(".temp-description");

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

window.addEventListener("load", () => {
let lon;
let lat;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

    fetch(api)
    .then(response => response.json())

    .then(data => {
        let myData = data;
        let fTemp = Math.floor(((myData.main.temp) * 9/5) - 459.67);
        let cTemp = Math.floor((fTemp - 32) / 1.8000);
        let weatherLocation = myData.name;
        let icon = myData.weather[0].icon;
        tempDegree.textContent = fTemp;
        tempDescription.textContent = weatherLocation;
        tempIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        localTimezone.textContent = myData.weather[0].description;

        temp.addEventListener("click", () => {
            if(tempSpan.textContent === "F") {
                tempSpan.textContent = "C";
                tempDegree.textContent = cTemp;
            } else {
                tempSpan.textContent = "F";
                tempDegree.textContent = fTemp;
            }
        })        
    })
  })
 }
})


// This doesn't work

// document.querySelector(".zipSubmit").addEventListener("click", () => {
//     let zip = document.querySelector("#zip").value;
//     if(zip != undefined) {
//     console.log(zip)
//     const api = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`
        
//     fetch(api)
//     .then(response => response.json()) 

//     .then(data => {
//         let myData = data;
//         let fTemp = Math.floor(((myData.main.temp) * 9/5) - 459.67);
//         console.log(fTemp);
//         let weatherLocation = myData.name;
//         let icon = myData.weather[0].icon;
//         tempDegree.textContent = fTemp;
//         tempDescription.textContent = weatherLocation;
//         tempIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//         localTimezone.textContent = myData.weather[0].description;    
//     })
//     }
// })

// function CtoF() {
//     console.log(temperature);
//     let cTemp = Math.floor((temperature - 32) / 1.8000);  
//         if(tempSpan.textContent === "F") {
//             tempSpan.textContent = "C";
//             tempDegree.textContent = cTemp;
//             console.log(`C: ${cTemp}`)
//         } else {
//             tempSpan.textContent = "F";
//             tempDegree.textContent = temperature;
//             console.log(`F: ${temperature}`)
//         }
// }

