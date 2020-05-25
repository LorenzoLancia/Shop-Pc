
//variabili globali per il mantenimento delle quantità
var gtx1660=0;
var rtx2060=0;
var rtx2070=0;
var rtx2080=0;
var r5600xt=0;
var r5700=0;
var r5700xt=0;
var vegavii=0;



function incrementa_quant(nome) {
    if (nome=="GTX 1660") {
        gtx1660+=1;
        return gtx1660;
    }
    if (nome=="RTX 2060") {
        rtx2060+=1;
        return rtx2060;
    }
    if (nome=="RTX 2070") {
        rtx2070+=1;
        return rtx2070;
    }
    if (nome=="RTX 2080") {
        rtx2080+=1;
        return rtx2080;
    }
    if (nome=="5600XT") {
        r5600xt+=1;
        return r5600xt;
    }
    if (nome=="5700") {
        r5700+=1;
        return r5700;
    }
    if (nome=="5700XT") {
        r5700xt+=1;
        return r5700xt;
    }
    if (nome=="VEGA VII") {
        vegavii+=1;
        return vegavii;
    }

}

function scrivi_su_localStorage(nome, prezzoUn) {
    //questa funzione scrive sul localStorage le varie cose ordinate
    var prodotto={nome_locale: "Osteria da Bacco", nome_prodotto: nome, quantita: incrementa_quant(nome), prezzo_unitario: prezzoUn};
    var chiave=nome+"_"+"_"+prezzoUn;
    var valore=JSON.stringify(prodotto);
    sessionStorage.setItem(chiave, valore);
    alert("Hai ordinato:\n"+nome);
}

