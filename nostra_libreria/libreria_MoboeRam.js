/*
    questa libreria è simmetrica a "libreria_Armando.js"
    implementerà le stesse funzioni, ma ovviamente con le particolarità di questo ristorante
*/

//variabili globali per il mantenimento delle quantità
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

//variabili per la gestione della creazione del piatto
//var opz=["Pennette", "Spaghetti", "Pomodorini", "Cozze", "Vongole", "Cannolicchi", "Salmone"];
//var listIngr="";

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

function scrivi_su_localStorage(nome, prezzoUn) { //in realtà sarebbe sessionStorage, ma non mi va di riscrivere il codice :)
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "I bracci del polpo", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome);
}

/**

function scrivi_su_localStorage_tavoli(nome) {
    var prodotto={nome_locale: "I bracci del polpo", nome_prodotto: nome, quantita: 1, prezzo_unitario: 0};
    var chiave=nome;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
}

function prenotaTavoli() {
    var o=document.getElementById("butt_prenotaTavoli");
    if (o!=null) {
        if (document.getElementById("tavolo1").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 1 da 4 persone");
            alert("Hai prenotato il tavolo 1 da 4 persone");
        }
        if (document.getElementById("tavolo2").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 2 da 4 persone");
            alert("Hai prenotato il tavolo 2 da 4 persone");
        }
        if (document.getElementById("tavolo3").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 3 da 4 persone");
            alert("Hai prenotato il tavolo 3 da 4 persone");
        }
        if (document.getElementById("tavolo4").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 4 da 4 persone");
            alert("Hai prenotato il tavolo 4 da 4 persone");
        }
        if (document.getElementById("tavolo5").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 5 da 4 persone");
            alert("Hai prenotato il tavolo 5 da 4 persone");
        }
        if (document.getElementById("tavolo6").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 6 da 4 persone");
            alert("Hai prenotato il tavolo 6 da 4 persone");
        }
        if (document.getElementById("tavolo7").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 7 da 4 persone");
            alert("Hai prenotato il tavolo 7 da 4 persone");
        }
        if (document.getElementById("tavolo8").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 8 da 4 persone");
            alert("Hai prenotato il tavolo 8 da 4 persone");
        }
        if (document.getElementById("tavolo9").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 9 da 4 persone");
            alert("Hai prenotato il tavolo 9 da 4 persone");
        }
        if (document.getElementById("tavolo10").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 10 da 4 persone");
            alert("Hai prenotato il tavolo 10 da 4 persone");
        }
        if (document.getElementById("tavolo11").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 11 da 6 persone");
            alert("Hai prenotato il tavolo 11 da 6 persone");
        }
        if (document.getElementById("tavolo12").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 12 da 6 persone");
            alert("Hai prenotato il tavolo 12 da 6 persone");
        }
        if (document.getElementById("tavolo13").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 13 da 6 persone");
            alert("Hai prenotato il tavolo 13 da 6 persone");
        }
        if (document.getElementById("tavolo14").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 14 da 6 persone");
            alert("Hai prenotato il tavolo 14 da 6 persone");
        }
        if (document.getElementById("tavolo15").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 15 da 6 persone");
            alert("Hai prenotato il tavolo 15 da 6 persone");
        }
        if (document.getElementById("tavolo16").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 16 da 8 persone");
            alert("Hai prenotato il tavolo 16 da 8 persone");
        }
        if (document.getElementById("tavolo17").checked) {
            scrivi_su_localStorage_tavoli("Tavolo 17 da 8 persone");
            alert("Hai prenotato il tavolo 17 da 8 persone");
        }
    }
}

function ilTuoPiatto(piatto, prezzo) {
    var puls="";
    puls+='<li class="list-group-item"><h4>Crea '+piatto+' '+prezzo+'€</h4><button type="button" class="btn btn-outline-primary" onclick="return opzPiatto();">Crea</button></li>';
    document.getElementById("tuoPiatto").innerHTML=puls;
    return true;
}

function opzPiatto() {
    var i, l=opz.length;
    var tab="";
    var larg=100/l;
    tab+="<li class='list-group-item'>";
    tab+="<h4>Questi sono gli ingredienti che puoi aggiungere al tuo primo di pesce</h4><small class='form-text text-muted'>Le immagini sono puramente illustrative</small>";
    for (i=0; i<l; i++) {
        tab+='<button type="button" class="btn btn-outline-success" onclick="return addIngr(\''+opz[i]+'\');">'+opz[i]+'</button>';
    }
    tab+="<br>";
    tab+="<div id='primo'></div>";
    tab+="<img src='Piatto.png' height='100px' width='100%'><br><br>";
    tab+="<h5>Il tuo primo di pesce è composto da:</h5>";
    tab+="<div id=\"mioPrimoDiPesce\"></div>";
    tab+="<br>";
    tab+='<button type="button" class="btn btn-outline-primary" onclick="return scrivi_su_localStorage(\'Il tuo primo di pesce\', 15);">Ordina</button></li>';
    document.getElementById("tuoPiatto").innerHTML=tab;
    return true;
}

function addIngr(cibo) {
    var lista=document.getElementById("mioPrimoDiPesce");
    if (listIngr!="") {
        listIngr+=", ";
    }
    listIngr+=cibo;
    lista.innerHTML=listIngr;
    var ingrImg=document.getElementById("primo");
    var obj=document.createElement("img");
    obj.setAttribute("src", cibo+".png");
    obj.setAttribute("height", "100px");
    ingrImg.appendChild(obj);
    return true;
}

**/