<?php


 	$name = $_POST["name"];
 	$email = "ariel.m.vidal@gmail.com"";
 	$message = $_POST["message"];
 	$headers = "From:" . $_POST["email"];

    mail($email, "Please contact" .$name, $message, $headers);


?>

