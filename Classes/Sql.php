<?php
	
class Sql{
	
	protected $mysqli; 
	
	public function __construct (){
		
	$this->mysqli = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_DATABASE);
	
	}
}

?>


