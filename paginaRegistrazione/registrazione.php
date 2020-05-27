<?php

session_start();

// variabili connessione

$host="localhost";
$user="root";
$password="";

$con = mysqli_connect($host,$user,$password);  // funzione connessione

mysqli_select_db($con,'elenco_utenti');   // seleziona il database

// variabili di tipo post che prendono in input i dati dalla form registrazione.html

$email=$_POST['email'];
$password=$_POST['password'];
$nome=$_POST['nome'];
$cognome=$_POST['cognome'];
$uname=$_POST['username'];

$sql="select * from utenti where username='$uname'";  // fa il check con username all'interno del database 

	
$result=mysqli_query($con, $sql);

$num = mysqli_num_rows($result);

if($num == 1){   // se esiste una riga 

	echo "L'utente esiste già!";
	header('location:reg_fallita.html');
	
}
else{  // altrimenti lo inserisce nel database
	$reg= "insert into utenti(email,password,nome,cognome,username) values ('$email', '$password','$nome','$cognome','$uname') ";
	mysqli_query($con, $reg);
	echo"Registrazione effettuata.";
	header('location:reg_successo.html');
	
}

?>

