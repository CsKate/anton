<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet">
    <title></title>
    <link rel="stylesheet" href="/Assets/css/css.css" >
</head>

<body>
    <?php
        include 'common/navbar.php';
    ?>


    <section>
        <?php $randomSzam = rand(1,4); ?>
        
        <div class="<?php echo "random-picture random-picture-".$randomSzam ?>" >
        
        </div>

        <div>
            <img class="anna-and-marton" alt="Anna & Márton" src="../Assets/images/anna_and_marton.svg" >
        </div>
        
        
        <div class="timer" >
            <div class="timer-card" id="day-first-digit" ></div>
            <div class="timer-card" id="day-second-digit" ></div>
            <div class="timer-card" id="day-third-digit"></div>
            <p class="timer-text" >nap</p>
            <div class="timer-card" id="hour-first-digit"></div>
            <div class="timer-card" id="hour-second-digit" ></div>
            <p class="timer-text" >óra</p>
            <div class="timer-card" id="min-first-digit" ></div>
            <div class="timer-card" id="min-second-digit"></div>
            <p class="timer-text" >perc</p>
            <div class="timer-card" id="sec-first-digit"></div>
            <div class="timer-card" id="sec-second-digit" ></div>
            <p class="timer-text" >másodperc</p>
        </div>
        
        
        <div>
            <p class="random-quote" >“Az igazi bilincs nem fémből készül. Nem kulcs nyitja. Semmi nem nyitja. Annyira erős. Egy szempár. Egy mosoly. Egy nevetés. Egy érzés. Egy Nő. Akiből nincs szabadulás.”</p>
            <p class="random-quote-author" >Csitáry-Hock Tamás</p>
        </div>
        <div id="sec"></div>
    </section>
    
    <script src="../Scripts/script.js">

    </script>
</body>
</html>





<!--
Ez csak a kísérletezéshez kellett:

    <form action="nevkuldes" method="POST" >

        keresztnév:
        <input type="text" name="firstName"> <br>
        
        <input type="submit" >
    </form>
-->
