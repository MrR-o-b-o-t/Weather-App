const degSection = document.querySelector(".deg-section");
const temp = document.querySelector(".temp");
let tempDegree = document.querySelector(".temp-degree");
let fTemp;
let cTemp;
document.querySelector("#fetchForm").addEventListener("submit", submitPost);
temp.addEventListener("click", cToF);

function navToggle() {
  const navHamburger = document.querySelector(".hamburger");
  const navEl = document.querySelector("nav");
  const contentEl = document.querySelector(".content");
  const hamburgerBars = document.getElementsByTagName("span");
  navHamburger.addEventListener("click", function () {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    hamburgerBars[0].classList.toggle("changeFirstBar");
    hamburgerBars[1].classList.toggle("changeSecondBar");
    hamburgerBars[2].classList.toggle("changeThirdBar");
  });
}
navToggle();

async function submitPost(e) {
  e.preventDefault();
  const key = "7fc25908d302657f051ed31e21a3935e";
  const localTimezone = document.querySelector(".location-timezone");
  const tempDescription = document.querySelector(".temp-description");
  const tempIcon = document.querySelector(".temp-icon");
  let zip = document.querySelector("#zip").value;
  if (zip != undefined) {
    console.log(zip);
    const api = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`;

    fetch(api)
      .then((response) => response.json())

      .then((data) => {
        let myData = data;
        fTemp = Math.floor((myData.main.temp * 9) / 5 - 459.67);
        cTemp = Math.floor((fTemp - 32) / 1.8);
        let weatherLocation = myData.name;
        let icon = myData.weather[0].icon;
        tempDegree.textContent = fTemp;
        tempDescription.textContent = weatherLocation;
        tempIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        localTimezone.textContent = myData.weather[0].description;
      });
  }
  document.querySelector("#fetchForm").reset();
}

function cToF(e) {
  e.preventDefault();
  let tempSpan = document.querySelector(".temp span");
  if (tempSpan.textContent === "F") {
    tempSpan.textContent = "C";
    tempDegree.textContent = cTemp;
    console.log(`C: ${cTemp}`);
  } else if (tempSpan.textContent === "C") {
    tempSpan.textContent = "F";
    tempDegree.textContent = fTemp;
    console.log(`F: ${fTemp}`);
  }
}
