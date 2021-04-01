const hourFirstNum = document.querySelector('.hour-first-num');
const hourSecondNum = document.querySelector('.hour-second-num');
const minFirstNum = document.querySelector('.minitues-fisrt-num');
const minSecondNum = document.querySelector('.minitues-second-num');
const secFirstNum = document.querySelector('.seconds-num');
const secSecondNum = document.querySelector('.second-seconds-num');


// let hour = date.getHours().toString();
// let min = date.getMinutes().toString();
// let sec = date.getSeconds().toString();
// // const firstNumHour = hour.charAt(0);
// // const secondNumHour = hour.charAt(1);
// // const firstNumMin = min.charAt(0);
// // const secondNumMin = min.charAt(1);
// // const firstNumSec = sec.charAt(0);
// // const secondNumSec = sec.charAt(1);

function setOpacity(ul, num) {
    let ulClassName = ul.classList[0];
    const listItems = document.querySelectorAll(`.${ulClassName} li`);
    listItems.forEach(li => li.classList.remove('current'));

    listItems[num].classList.add('current')
}

function upadteTime(ul, num) {
    let top = 48;


    switch (num) {
        case '1':
            ul.style.top = `${top - 5}vh`
            break;
        case '2':
            ul.style.top = `${top - 10}vh`
            break;
        case '3':
            ul.style.top = `${top - 15}vh`
            break;
        case '4':
            ul.style.top = `${top - 20}vh`
            break;
        case '5':
            ul.style.top = `${top - 25}vh`
            break;
        case '6':
            ul.style.top = `${top - 30}vh`
            break;
        case '7':
            ul.style.top = `${top - 35}vh`
            break;
        case '8':
            ul.style.top = `${top - 40}vh`
            break;
        case '9':
            ul.style.top = `${top - 45}vh`
            break;
        default:
            ul.style.top = `${top}vh`
    }
}

// setInterval(upadteTime(hourFirstNum, firstNumHour), 1000)
// setInterval(upadteTime(hourSecondNum, secondNumHour), 1000)
// setInterval(upadteTime(minFirstNum, firstNumMin), 1000)
// setInterval(upadteTime(minSecondNum, secondNumMin), 1000)

// set seconds
setInterval(function () {
    const date = new Date();
    let sec = date.getSeconds().toString();
    let firstNumSec = 0;
    if (sec.length === 2) {
        firstNumSec = sec.charAt(0);
    }
    setOpacity(secFirstNum, firstNumSec)
    upadteTime(secFirstNum, firstNumSec)
}, 1000)
setInterval(function () {
    const date = new Date();
    let sec = date.getSeconds().toString();
    let secondNumSec;
    sec.length === 1 ? secondNumSec = sec.charAt(0) : secondNumSec = sec.charAt(1);
    upadteTime(secSecondNum, secondNumSec)
    setOpacity(secSecondNum, secondNumSec)
}, 1000)

// set mintutes
setInterval(function () {
    const date = new Date();
    let min = date.getMinutes().toString();
    let firstNumMin = 0;
    if (min.length === 2) {
        firstNumMin = min.charAt(0);
    }
    upadteTime(minFirstNum, firstNumMin)
    setOpacity(minFirstNum, firstNumMin)
}, 1000)
setInterval(function () {
    const date = new Date();
    let min = date.getMinutes().toString();
    let secondNumMin;
    min.length === 1 ? secondNumMin = min.charAt(0) : secondNumMin = min.charAt(1);
    upadteTime(minSecondNum, secondNumMin)
    setOpacity(minSecondNum, secondNumMin)
}, 1000)

// set hours

setInterval(function () {
    const date = new Date();
    let hour = date.getHours().toString();;
    let firstNumHour = 0;
    if (hour.length === 2) {
        firstNumHour = hour.charAt(0);
    }
    upadteTime(hourFirstNum, firstNumHour)
    setOpacity(hourFirstNum, firstNumHour)
}, 1000)
setInterval(function () {
    const date = new Date();
    let hour = date.getHours().toString();;
    let secondNumHour;
    hour.length === 1 ? secondNumHour = hour.charAt(0) : secondNumHour = hour.charAt(1);
    upadteTime(hourSecondNum, secondNumHour)
    setOpacity(hourSecondNum, secondNumHour)
}, 1000)
