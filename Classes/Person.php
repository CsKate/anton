<?php
//ez az osztály csak gyakorlás volt
class Person extends Sql {
    
	public function getPerson($firstName){
    echo "Kata";
	
		$stmt = $this -> mysqli -> prepare("select * from muskonames where firstName = ?");
    echo $firstName;
		
		$stmt -> bind_param("s", $firstName); 
		 
		$stmt-> execute();
		
		$result = $stmt -> get_result();
        
        $sor  = $result -> fetch_assoc();
        echo "Kata2";
        echo $sor['firstName'];
        echo $sor['lastName'];
        echo "Kata3";
		
		return true;
	}
}