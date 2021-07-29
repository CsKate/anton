<?php

    class Router {

        public function __construct($uri){

            $query = explode("/", $uri);


            if ($_SERVER["REQUEST_METHOD"] == "GET"){

                switch ($query[1]){

                    case "":
                        require 'Views/kezdolap.php';
                    break;

                    case "kezdolap":
                        require 'Views/kezdolap.php';
                    break;

                    case "visszajelzes":
                        require 'Views/visszajelzes.php';
                    break;
                }
            }

            if ($_SERVER["REQUEST_METHOD"] == "POST"){

                switch ($query[1]){  

                    case "guestlist";
                        $guest = new Guests;

                        $guest -> newGuest($_POST['name'], $_POST['phone'], $_POST['email']);

                    break;  
                }
            } 
        }
    }

?>