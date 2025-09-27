setInterval(() => {
  let datenow = new Date();
  document.querySelector(".hours").innerHTML = datenow
    .getHours()
    .toString()
    .padStart(2, "0");
  document.querySelector(".minutes").innerHTML = datenow
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector(".second").innerHTML = datenow
    .getSeconds()
    .toString()
    .padStart(2, "0");
}, 1000);
const but = document.querySelector("button");
but.addEventListener("click", () => {
  if (document.querySelector("body").classList.contains("dark")) {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  } else {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
  }
});
