<?php
    session_start();
    $uri = $_SERVER["REQUEST_URI"];
    include_once("config.php");
    spl_autoload_register(function ($class) {
        include 'Classes/' . $class . '.php';
    });
    $router = new Router($uri);
?>