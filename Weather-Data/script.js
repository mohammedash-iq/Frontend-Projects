const apiKey = "Your api key here";
const errormsg = document.querySelector("#error-message");
const srchbtn = document.querySelector("#submit-btn");
const weatherdiv = document.querySelector("#weather-div");
const tempdiv = document.querySelector("#temp-div");
const winddiv = document.querySelector("#wind-div");
const cityname = document.querySelector("#city-name");
const input = document.querySelector("#input-box");
input.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    srchbtn.click();
  }
});
srchbtn.addEventListener("click", (event) => {
  event.preventDefault();
  searched = input.value;
  getdata(searched);
});
function getdata(searched) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searched}&appid=${apiKey}`
  )
    .then((data) => data.json())
    .then((data) => {
      cityname.innerHTML = data.name;
      tempdiv.innerHTML = `${Math.trunc(data.main.temp - 273)} Celcius`;
      winddiv.innerHTML = `${data.wind.speed} km/h`;
      weatherdiv.innerHTML = data.weather[0].description;
      errormsg.innerHTML = "";
      input.value = "";
    })
    .catch((error) => {
      errormsg.innerHTML = "Error Fetching City Data!";
    });
}
