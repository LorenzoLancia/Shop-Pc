<!DOCTYPE html>
<html>
    <head>
        <title>CPU - Processori</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" type="text/css" href="../../css/bootstrap.min.css">
        <script type="text/javascript" lang="javascript" src="../../js/bootstrap.min.js"></script>
        <script type="text/javascript" lang="javascript" src="../../nostra_libreria/libreria_Armando.js"></script>
    </head>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
	
	<body>
	
	<?php 

	$connect = mysqli_connect('localhost', 'root', '', 'cpu');
	$query = 'SELECT * FROM products ORDERY by id ASC';

	$result = mysqli_query($connect,$query);

	if($result){
		if(mysqli_num_rows($result)>0{
			while($product = mysqli_fetch_assoc($result)){
				print_r($product);
				}
			}
		}
		?>

<!--<body class="text-center" onload="return ilTuoPiatto('la tua pizza', 10);"> -->
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="../../index.html">
            <!-- immagine logo -->
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../../pagina_Catalogo/lista_Catalogo.html">Catalogo prodotti</a>
                    </li>
                </ul>
                <a href="../../pagina_Carrello_utente/carrello.html" class="btn btn-outline-light btn-lg" role="button"><i class="fas fa-cart-plus"></i> Carrello</a>         
            </div>                 
        </nav>
        <div class="media">
            <img class="mr-3" src="cpu.jpeg" >
            <div class="media-body"><br>
                <h1 class="mt-0">La nostra selezione</h1>
                <h4>Qui troverai il meglio che il mercato ha da offrire</h4>
                <ul class="list-group list-group-flush">
<!--            <li class="list-group-item"><a href="#pizze">Pizze</a></li>
                <li class="list-group-item"><a href="#bibite">Bibite</a></li>
                <li class="list-group-item"><a href="#tavoli">Tavoli</a></li>  -->
                </ul>
            </div>
        </div><br>
        <ul class="list-group list-group-flush" id="pizze">
            <h2><center>PROCESSORI</center></h2>
            <li class="list-group-item">

            <div class="container">
	            <div class="row">
	            	<div class="col">
	            		<h4>Ryzen 3 3200G</h4><br>
	            		<img src="3200-2.png" width="250" height="250">
	            	</div>
	            	<div class="col">
	            		<h5>Prezzo e specifiche</h5>
	            		4 Core, 4 Thread, 3.6 GHz<br><br>
	            		<b>100€</b><br><br>
	            		<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Margherita', 6);">Ordina</button></li>
	            	</div>
            </div>
            
            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Intel i3 9100</h4><br>
            			<img src="9100.jpg" widht="200" height="200">
            		</div>
            		<div class="col">
            			<h5>Prezzo e specifiche</h5>
            			4 Core, 4 Thread, 3.6 GHz<br><br>
            			<b>80€</b><br><br>
            			<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Marinara', 5);">Ordina</button></li>
        			</div>
        		</div>
        	</div>

            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Ryzen 5 3600</h4><br>
            			<img src="3600.jpeg" width="200" height="200">
            		</div>
            		<div class="col">
            			<h5>Prezzo e specifiche</h5>
            			6 Core, 12 Thread, 3.6 GHz<br><br>
            			<b>160€</b><br><br>
            			<br><button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Diavola', 7.50);">Ordina</button></li>
            		</div>
            	</div>
            </div>
            
            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
						<h4>Intel i5 9600k</h4><br>
						<img src="9600.jpg" width="200" height="200">
					</div>
					<div class="col">
						<h5>Prezzo e specifiche</h5>
						6 Core, 12 Thread, 3.6 GHz<br><br>
						<b>200€</b><br><br>
						<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Focaccia', 3);">Ordina</button></li>
					</div>
				</div>
			</div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Ryzen 7 3700X</h4><br>
            			<img src="3700.jpg" width="200" height="200">
            		</div>
            		<div class="col">
            			<h5>Prezzo e specifiche</h5>
            			8 Core, 16 Thread, 3.6 GHz<br><br>
            			<b>280€</b><br><br>
            			<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Prosciutto e scamorza', 7);">Ordina</button></li>
            		</div>
            	</div>
            </div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Intel i7 9700k</h4><br>
            			<img src="9700.jpg" width="200" height="200">
            			</div>
            			<div class="col">
            				<h5>Prezzo e Specifiche</h5>
            				8 Core, 8 Thread, 3.6 GHz<br><br>
            				<b>350€</b><br><br>
            				<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Salsiccia e funghi', 8);">Ordina</button></li>
            			</div>
            		</div>
            	</div>


 <!--       <div id="tuoPiatto"></div> -->
        </ul>
        <br>
        <br>
        <ul class="list-group list-group-flush" id="bibite">
            <h2><center>DISSIPATORI</center></h2>

            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Cooler Master Hyper 212 EVO</h4><br>
            			<img src="212.jpg" width="300" height="300">
            		</div>
            		<div class="col">
            			<h5>Prezzo</h5><br><br>
            			<b>40€</b><br><br>
            		<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Acqua 1l', 1.50);">Ordina</button></li>
            	</div>
            </div>
        </div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Noctua NHD15</h4><br>
            			<img src="nhd15.jpg" width="300" height="300">
            		</div>
            		<div class="col">
            			<h5>Prezzo</h5><br><br>
            			<b>80€</b><br><br>
            		<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Acqua 0,5l', 0.50);">Ordina</button></li>
            	</div>
            </div>
        </div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Noctua NHL12S</h4><br>
            			<img src="nhl12.jpg" width="300" height="300">
            		</div>
            		<div class="col">
            			<h5>Prezzo</h5><br><br>
            			<b>60€</b><br><br>
            		<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Coca-cola 0,5l', 3);">Ordina</button></li>
            	</div>
            </div>
        </div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Corsair H60</h4><br>
            			<img src="h60.jpg" width="70%" height="70%">
            		</div>
            		<div class="col">
            			<h5>Prezzo</h5><br><br>
            			<b>90€</b><br><br>
            			<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Coca-cola lattina', 2);">Ordina</button></li>
            		</div>
            	</div>
            </div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Corsair H115i</h4><br>
            			<img src="h115.jpg" width="300" height="300">
            		</div>
            		<div class="col">
            			<h5>Prezzo</h5><br><br>
            			<b>160€</b><br><br>
            		<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Fanta 0,5l', 2.50);">Ordina</button></li>
            	</div>
            </div>
        </div>


            <li class="list-group-item">

            <div class="container">
            	<div class="row">
            		<div class="col">
            			<h4>Corsair H150i</h4><br>
            			<img src="h150.jpg" width="300" height="300">
            		</div>
            		<div class="col">
            			<h5>Prezzo</h5><br><br>
            			<b>180€</b><br><br>
            			<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage('Fanta lattina', 1.50);">Ordina</button></li>
            		</div>
            	</div>
            </div>


        </ul>
        <br>
<!--    <h2 id="tavoli">TAVOLI</h2>
        <ul class="pagination justify-content-center">
            <div class="row">
                <div class="col-sm-6">
                    <h4>Da 4 persone</h4>
                    <br>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo1">
                        <label class="form-check-label" for="tavolo1">
                            Tavolo 1
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo2">
                        <label class="form-check-label" for="tavolo2">
                            Tavolo 2
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo3">
                        <label class="form-check-label" for="tavolo3">
                            Tavolo 3
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo4">
                        <label class="form-check-label" for="tavolo4">
                            Tavolo 4
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo5">
                        <label class="form-check-label" for="tavolo5">
                            Tavolo 5
                        </label>
                    </div>
                </div>
                <div class="col-sm-6">
                    <h4>Da 6 persone</h4>
                    <br>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo6">
                        <label class="form-check-label" for="tavolo6">
                            Tavolo 6
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo7">
                        <label class="form-check-label" for="tavolo7">
                            Tavolo 7
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="tavolo8">
                        <label class="form-check-label" for="tavolo8">
                            Tavolo 8
                        </label>
                    </div>
                </div>
            </div>
        </ul>
        <button type="button" class="btn btn-outline-primary" onclick="return prenotaTavoli();" id="butt_prenotaTavoli">Prenota</button></li>
        <br><br><br><br><br>
    -->
        <!-- Footer -->
      <footer class="page-footer font-small blue">
        <div class="footer-copyright text-center py-3"  style="background-color: #82FF5C;"><strong>Made with</strong> ❤️ Riccardo e Lorenzo
          </div>
      </footer>
      <!-- Fine Footer -->

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    </body>
</html>