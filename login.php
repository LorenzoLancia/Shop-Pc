<?php

session_start();


$host="localhost";
$user="root";
$password="";

$con = mysqli_connect($host,$user,$password);

mysqli_select_db($con,'elenco_utenti');

$email=$_POST['email'];
$password=$_POST['password'];
$nome=$_POST['nome'];
$cognome=$_POST['cognome'];
$uname=$_POST['username'];

$sql="select * from utenti where username='$username' && password = '$password'";

	
$result=mysqli_query($con, $sql);

$num = mysqli_num_rows($result);

if($num == 1){

	header('location:pagina_Catalogo/lista_Catalogo.html');
	
}
else{
	
	header('location:index.html');
	
}

?>
