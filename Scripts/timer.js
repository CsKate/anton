
let dateObject = { day: 0, hour: 0, min: 0, sec: 0 };

function setDateObject() {
  let now = Date.now();
  //itt majd órára pontosan meg kéne adni a kezdést
  let weddingDate = new Date("August 03, 2021 21:00:00").getTime();

  let difference = weddingDate - now;
  let allSec = Math.round(difference / 1000);
  let day = allSec / (60 * 60 * 24);
  let hour = (day - Math.floor(day)) * 24;
  let min = (hour - Math.floor(hour)) * 60;
  let sec = (min - Math.floor(min)) * 60;

  dateObject.day = Math.floor(day);
  dateObject.hour = Math.floor(hour);
  dateObject.min = Math.floor(min);
  dateObject.sec = Math.floor(sec);
}

setDateObject();

setInterval(timer, 1000);

function timer() {
  if (dateObject.sec > 0) {
    dateObject.sec -=1;
  } else {
    dateObject.sec = 59;
    if (dateObject.min > 0) {
      dateObject.min -= 1;
    } else {
      dateObject.min = 59;
      if (dateObject.hour > 0) {
        dateObject.hour -= 1;

      } else {
        dateObject.hour = 23;
        dateObject.day -= 1;
      }
    }
  }
  //ez csak a tesztelés idejére kell:
  console.log("dateObject");
  console.log(dateObject);


  let dayFirstDigit = Math.floor(dateObject.day / 100);
    let daySecondDigit = Math.floor((dateObject.day - dayFirstDigit * 100) / 10);
    let dayThirdDigit = dateObject.day - dayFirstDigit * 100 - daySecondDigit * 10;

    document.getElementById("day-first-digit").innerHTML =
      Math.floor(dayFirstDigit);
    document.getElementById("day-second-digit").innerHTML =
      Math.floor(daySecondDigit);
    document.getElementById("day-third-digit").innerHTML =
      Math.floor(dayThirdDigit);

    let hourFirstDigit = Math.floor(dateObject.hour / 10);
    let hourSecondDigit = dateObject.hour - hourFirstDigit * 10;

    document.getElementById("hour-first-digit").innerHTML =
      Math.floor(hourFirstDigit);
    document.getElementById("hour-second-digit").innerHTML =
      Math.floor(hourSecondDigit);

    let minFirstDigit = Math.floor(dateObject.min / 10);
    let minSecondDigit = dateObject.min - minFirstDigit * 10;

    document.getElementById("min-first-digit").innerHTML =
      Math.floor(minFirstDigit);
    document.getElementById("min-second-digit").innerHTML =
      Math.floor(minSecondDigit);

    let secFirstDigit = Math.floor(dateObject.sec / 10);
    let secSecondDigit = dateObject.sec - secFirstDigit * 10;

    document.getElementById("sec-first-digit").innerHTML =
      Math.floor(secFirstDigit);
    document.getElementById("sec-second-digit").innerHTML =
      Math.floor(secSecondDigit);
}


