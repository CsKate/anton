//azért nem 1 másodperces a frissítés, mert azt vettem észre, h úgy akad, de ez meg lehet, h túl sűrű
setInterval(timer, 100);

//Szerintem ez egy borzasztó ronda megoldás, és eléggé akadozik is a működése. Ennek majd jobban utána kéne nézni

function timer() {
  let now = Date.now();
    //itt majd órára pontosan meg kéne adni a kezdést
    let weddingDate = new Date("October 30, 2022 20:30:00").getTime();
    
    let difference = weddingDate - now;
    let allSec = Math.round(difference/1000); 
    let day = allSec/(60*60*24) ;
    let hour = (day - Math.floor(day))*24  ;
    let min = (hour - Math.floor(hour))*60  ;
    let sec = (min - Math.floor(min))*60;
    
    let dayFirstDigit = Math.floor(day/100);
    let daySecondDigit = Math.floor((day-dayFirstDigit*100)/10);
    let dayThirdDigit = day-dayFirstDigit*100 - daySecondDigit*10;
    
    document.getElementById("day-first-digit").innerHTML = Math.floor(dayFirstDigit) ;
    document.getElementById("day-second-digit").innerHTML = Math.floor(daySecondDigit) ;
    document.getElementById("day-third-digit").innerHTML = Math.floor(dayThirdDigit) ;
    
    
    let hourFirstDigit = Math.floor(hour/10);
    let hourSecondDigit = hour-hourFirstDigit*10;
    
    document.getElementById("hour-first-digit").innerHTML = Math.floor(hourFirstDigit) ;
    document.getElementById("hour-second-digit").innerHTML = Math.floor(hourSecondDigit) ;
    
    
    let minFirstDigit = Math.floor(min/10);
    let minSecondDigit = min-minFirstDigit*10;
    
    document.getElementById("min-first-digit").innerHTML = Math.floor(minFirstDigit) ;
    document.getElementById("min-second-digit").innerHTML = Math.floor(minSecondDigit) ;
    
    
    let secFirstDigit = Math.floor(sec/10);
    let secSecondDigit = sec-secFirstDigit*10;
    
    //itt még valami gáz van, mert nagyon akad... Tizedmásodpercenként lfuttatom az egészet, ez annyira leterheli?? Vagy a szémolás ilyen sok időt vesz igénybe? Más gépén is ilyen lassú?
    document.getElementById("sec-first-digit").innerHTML = Math.floor(secFirstDigit) ;
    document.getElementById("sec-second-digit").innerHTML = Math.floor(secSecondDigit) ;

   
    
    
  document.getElementById("sec").innerHTML = Math.round(sec) ;
}



