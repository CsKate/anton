<?php

class Guests extends Sql {
    
	public function newGuest($name, $phone, $email){
        
        $stmt = $this -> mysqli -> prepare("INSERT INTO guests(name, phone, email) VALUES (?,?,?)");

        
		$stmt -> bind_param("sis", $name, $phone, $email); 
		 
		$stmt-> execute();
        
		return true;
	}
}