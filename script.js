"use strict";

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let digitalHours = document.getElementById("hours");
let digitalMinutes = document.getElementById("minutes");
let digitalSeconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

setInterval(() => {
    const day = new Date();
    const hours = day.getHours() * 30;
    const minutes = day.getMinutes() * 6;
    const seconds = day.getSeconds() * 6;
    hour.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
    minute.style.transform = `rotateZ(${minutes}deg)`;
    second.style.transform = `rotateZ(${seconds}deg)`;

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //convert 24 hour clock to 12 hour clock
    let am = h > 12 ? "PM" : "AM";
    h = h > 12 ? h - 12 : hour;

    //add 0 before single digit numbers
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    digitalHours.innerHTML = h;
    digitalMinutes.innerHTML = m;
    digitalSeconds.innerHTML = s;
    ampm.innerHTML = am;
});