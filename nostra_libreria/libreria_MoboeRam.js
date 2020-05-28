
//variabili globali per il mantenimento delle quantità
// vengono incrementate ogni volta che vengono aggiunte al carrello

var ram8=0;
var ram16=0;
var h310=0;
var b365=0;
var z390u=0;
var z390e=0;
var b450m=0;
var b450pl=0;
var b450pr=0;
var x470=0;

// funzione che in base al nome ricevuto in input dalla pagina dei prodotti
// incrementa la quantità del prodotto

function incrementa_quant(nome) {
    if (nome=="8GB DDR4") {
        ram8+=1;
        return ram8;
    }
    if (nome=="16GB DDDR4") {
        ram16+=1;
        return ram16;
    }
    if (nome=="MSI H310M") {
        h310+=1;
        return h310;
    }
    if (nome=="ASUS B365-PLUS") {
        b365+=1;
        return b365;
    }
    if (nome=="Gigabyte Z390UD") {
        z390u+=1;
        return z390u;
    }
    if (nome=="Gigabyte Z390 ELITE") {
        z390e+=1;
        return z390e;
    }
    if (nome=="Asrock B450M") {
        b450m+=1;
        return b450m;
    }
    if (nome=="Asus B450 PLUS") {
        b450pl+=1;
        return b450pl;
    }
    if (nome=="Gigabyte B450 PRO") {
        b450pr+=1;
        return b450pr;
    }
    if (nome=="MSI X470 PRO MAX") {
        x470+=1;
        return x470;
    }

}

function scrivi_su_localStorage(nome, prezzoUn) { 
    //questa funzione scrive sul localStorage i prodotti ordinati
    var prodotto={ nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome); //produce un allert visivo contente ciò che hai appena ordinato
}

