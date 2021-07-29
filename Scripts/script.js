//azért nem 1 másodperces a frissítés, mert azt vettem észre, h úgy akad, de ez meg lehet, h túl sűrű
setInterval(timer, 10);

function timer() {
  let most = Date.now();
    //itt majd órára pontosan meg kéne adni a kezdést
    let eskuvoDatum = new Date("July 28, 2021 20:30:00").getTime();
    let kulonbseg = eskuvoDatum - most;
    let osszMasodperc = Math.round(kulonbseg/1000); 
    let nap = osszMasodperc/(60*60*24) ;
    let ora = (nap - Math.floor(nap))*24  ;
    let perc = (ora - Math.floor(ora))*60  ;
    let masodperc = (perc - Math.floor(perc))*60;
    
  document.getElementById("sec").innerHTML = Math.round(masodperc) ;
}



