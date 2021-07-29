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
        <div id="sec"></div>
        <div class="<?php echo "random-picture random-picture-".$randomSzam ?>" >
        
        </div>

        <div>
            <img class="anna-and-marton" alt="Anna & Márton" src="../Assets/images/anna_and_marton.svg" >
        </div>
        <h2 class="eskuvoi-datum" >2022. május 28.</h2>
        
        <h1 class="dear-guests" >Kedves Vendégeink!</h1>
        <p class="invitation-text" >Szeretettel hívunk benneteket 2022. május 28-án megrendezésre kerülő esküvőnkre, amely a XXXXXXXX templomban kerül majd megrendezésre. És akkor ide kell majd kb mégegy mondat, hogy normális mennyiségű szöveg legyen itt.</p>
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
