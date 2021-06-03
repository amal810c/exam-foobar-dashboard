"use strict";

document.addEventListener("DOMContentLoaded", init);

let url = "https://teamellewoods.herokuapp.com/";
let json;
/* 8; */

async function init() {
  console.log("hallo");
  const respons = await fetch(url);
  json = await respons.json();
  buildDashboard(json);
  setTimeout(refreshDashboard, 1000);
  fetchBeer();
}

async function fetchBeer(tapId) {
  let svgObject = await fetch("./images/beerglass.svg");
  let svg = await svgObject.text();
  document.querySelector("#beeranimation_0 .beerpic").innerHTML = svg;
  document.querySelector("#beeranimation_1 .beerpic").innerHTML = svg;
  document.querySelector("#beeranimation_2 .beerpic").innerHTML = svg;
  document.querySelector("#beeranimation_3 .beerpic").innerHTML = svg;
  document.querySelector("#beeranimation_4 .beerpic").innerHTML = svg;
  document.querySelector("#beeranimation_5 .beerpic").innerHTML = svg;
  document.querySelector("#beeranimation_6 .beerpic").innerHTML = svg;
}

function buildDashboard(info) {
  console.log("build dashboard");
  //build taps
  let temp = document.querySelector("template#tap");
  info.taps.forEach((tap) => {
    console.log("hej");
    let clone = temp.content.cloneNode(true);
    clone.querySelector("#tap_").id = "tap_" + tap.id;
    clone.querySelector(".beer").textContent = tap.beer;
    clone.querySelector(".level").textContent = tap.level;
    clone.querySelector(".capacity").textContent = tap.capacity;

    document.querySelector("#beeranimation_" + tap.id).appendChild(clone);
  });
}

async function refreshDashboard() {
  const respons = await fetch(url);
  const data = await respons.json();

  //update taps
  data.taps.forEach((tap) => {
    const element = document.querySelector("#tap_" + tap.id);
    element.querySelector(".level").textContent = tap.level;

    let level = (tap.level / 2500) * 100;
    console.log(level);
    let beerHeight = (850 / 100) * level;
    let beerY = 850 - beerHeight;
    let beer = document.querySelector("#beeranimation_" + tap.id + " #beer rect");
    console.log(beer);
    if (level <= 15) {
      beer.setAttribute("fill", "red");
    } else {
      beer.setAttribute("fill", "#F8B123");
    }

    beer.setAttribute("height", beerHeight);
    beer.setAttribute("y", 100 + beerY);

    element.querySelector(".capacity").textContent = tap.capacity;
  });

  setTimeout(refreshDashboard, 1000);
}
