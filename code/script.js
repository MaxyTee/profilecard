"use strict";
console.log("Hello World");
// function updateTime() {
//   const utcTIme = new Date().toISOString();
//   document.getElementById("utc-time").textContent = utcTIme;
//   console.log(utcTIme);
// }

console.log("Hello");

function updateTime() {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "numeric",
    month: "numeric",
    year: "numeric",
    // weekday: 'long',
  };

  // const locale = navigator.language;
  // console.log(locale);

  document.getElementById("utc-time").textContent = new Intl.DateTimeFormat(
    navigator.language.locale,
    options
  ).format(now);
}

setInterval(function () {
  updateTime();
}, 1000);
