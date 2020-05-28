
//variabili globali per le quantità dei prodotti
// vengono incrementate ogni volta che vengono aggiunte al carrello

var ryzen3=0;
var intel3=0;
var ryzen5=0;
var intel5=0;
var ryzen7=0;
var intel7=0;
var hyper212=0;
var noctua15=0;
var noctua12=0;
var h60=0;
var h115=0;
var h150=0;
var piatto=0;

// funzione che in base al nome ricevuto in input dalla pagina dei prodotti
// incrementa la quantità del prodotto

function incrementa_quant(nome) {
    if (nome=="Ryzen 3 3200G") {
        ryzen3+=1;
        return ryzen3;
    }
    if (nome=="Intel i3 9100") {
        intel3+=1;
        return intel3;
    }
    if (nome=="Ryzen 5 3600") {
        ryzen5+=1;
        return ryzen5;
    }
    if (nome=="Intel i5 9600k") {
        intel5+=1;
        return intel5;
    }
    if (nome=="Ryzen 7 3700X") {
        ryzen7+=1;
        return ryzen7;
    }
    if (nome=="Intel i7 9700k") {
        intel7+=1;
        return intel7;
    }
    if (nome=="Hyper 212") {
        hyper212+=1;
        return hyper212;
    }
    if (nome=="Noctua NHD15") {
        noctua15+=1;
        return noctua15;
    }
    if (nome=="Noctua NHL12S") {
        noctua12+=1;
        return noctua12;
    }
    if (nome=="Corsair H60") {
        h60+=1;
        return h60;
    }
    if (nome=="Corsair H115i") {
        h115+=1;
        return h115;
    }
    if (nome=="Corsair H150i") {
        h150+=1;
        return h150;
    }

}

function scrivi_su_localStorage(nome, prezzoUn) { 
    //questa funzione scrive sul localStorage i prodotti ordinati
	// variabili che vengono riprese da carrello 
    var prodotto={ nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn; 
    var valore=JSON.stringify(prodotto);  
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome);  //produce un allert visivo contente ciò che hai appena ordinato
}
